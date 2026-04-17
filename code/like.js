// likes.js
import { getDatabase, ref, onValue, set, remove, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

/**
 * Renders a like button with real‑time count inside a container element.
 * @param {string} syllabusId - The Firebase key of the syllabus item.
 * @param {string} containerId - The ID of the HTML element where the button will be placed.
 * @param {object} currentUser - The currently logged‑in Firebase user (or null).
 * @param {function} showToast - Function to display toast messages.
 */
export function attachLikeButton(syllabusId, containerId, currentUser, showToast) {
    const db = getDatabase();
    const likesRef = ref(db, `syllabusLikes/${syllabusId}`);
    
    onValue(likesRef, (snapshot) => {
        const likeCount = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
        const userId = currentUser?.uid;
        const isLiked = userId && snapshot.exists() && snapshot.val()[userId] === true;
        
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <button class="like-btn flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
                    isLiked 
                        ? 'bg-red-50 text-red-500 border border-red-200' 
                        : 'bg-gray-50 text-gray-400 border border-gray-200 hover:bg-gray-100'
                }" title="${isLiked ? 'Unlike' : 'Like'}">
                    <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart text-lg"></i>
                    <span class="text-xs font-semibold mt-0.5">${likeCount}</span>
                </button>
            `;
            const btn = container.querySelector('.like-btn');
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleLike(syllabusId, currentUser, showToast);
            });
        }
    });
}

/**
 * Toggle like status for a syllabus item.
 * @param {string} syllabusId - The Firebase key.
 * @param {object} currentUser - Firebase user (must be logged in).
 * @param {function} showToast - Toast notification function.
 */
export async function toggleLike(syllabusId, currentUser, showToast) {
    if (!currentUser) {
        showToast('Please sign in to like', 'error');
        return;
    }
    const db = getDatabase();
    const userId = currentUser.uid;
    const likeRef = ref(db, `syllabusLikes/${syllabusId}/${userId}`);
    
    try {
        const snapshot = await get(likeRef);
        if (snapshot.exists()) {
            await remove(likeRef);
        } else {
            await set(likeRef, true);
        }
    } catch (err) {
        console.error("Like toggle failed:", err);
        showToast('❌ Failed to update like', 'error');
    }
}