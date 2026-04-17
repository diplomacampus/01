// likes.js
import { getDatabase, ref, onValue, set, remove, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

/**
 * Attaches a real‑time like button to a container.
 * @param {string} syllabusId - Firebase key of the syllabus item.
 * @param {string} containerId - ID of the HTML element to hold the button.
 * @param {object} currentUser - Currently logged in user (or null).
 * @param {function} showToast - Function to display toast messages.
 */
export function initLikes(syllabusId, containerId, currentUser, showToast) {
    const db = getDatabase();
    const likesRef = ref(db, `syllabusLikes/${syllabusId}`);

    onValue(likesRef, (snapshot) => {
        const likeCount = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
        const userId = currentUser?.uid;
        const isLiked = userId && snapshot.exists() && snapshot.val()[userId] === true;

        const container = document.getElementById(containerId);
        if (!container) return;

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
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!currentUser) {
                showToast('Please sign in to like', 'error');
                return;
            }
            const likeRef = ref(db, `syllabusLikes/${syllabusId}/${currentUser.uid}`);
            try {
                const snap = await get(likeRef);
                if (snap.exists()) {
                    await remove(likeRef);
                } else {
                    await set(likeRef, true);
                }
            } catch (err) {
                console.error(err);
                showToast('Failed to update like', 'error');
            }
        });
    });
}