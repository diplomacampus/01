// likes.js
(function() {
    // Firebase configuration (must match your existing project)
    const firebaseConfig = {
        apiKey: "AIzaSyAaAbo8Q0fhXpMF1tgypr8dkvhBGyQQWig",
        authDomain: "diplomacampus.firebaseapp.com",
        databaseURL: "https://diplomacampus-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "diplomacampus",
        storageBucket: "diplomacampus.firebasestorage.app",
        messagingSenderId: "330061663460",
        appId: "1:330061663460:web:9d22eb10f9a821445b30f1"
    };

    // Initialize Firebase (if not already initialized)
    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else if (typeof firebase === 'undefined') {
        console.error('Firebase SDK not loaded. Make sure to include firebase-app.js, firebase-auth.js, and firebase-database.js before likes.js');
        return;
    }

    const db = firebase.database();
    const auth = firebase.auth();

    // Create the like button element
    const likeBtn = document.createElement('button');
    likeBtn.id = 'site-like-button';
    likeBtn.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all duration-200 bg-white text-gray-600 border border-gray-200 hover:bg-gray-50';
    likeBtn.setAttribute('title', 'Like this site');
    likeBtn.innerHTML = `
        <i class="fa-regular fa-heart text-lg"></i>
        <span class="text-sm font-semibold" id="site-like-count">0</span>
    `;
    document.body.appendChild(likeBtn);

    const heartIcon = likeBtn.querySelector('i');
    const countSpan = document.getElementById('site-like-count');

    // Real‑time like count and user like status
    const siteLikesRef = db.ref('siteLikes/main');
    siteLikesRef.on('value', (snapshot) => {
        const likes = snapshot.val() || {};
        const likeCount = Object.keys(likes).length;
        const currentUser = auth.currentUser;
        const isLiked = currentUser && likes[currentUser.uid] === true;

        countSpan.textContent = likeCount;

        // Update button styling based on liked state
        if (isLiked) {
            likeBtn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200', 'hover:bg-gray-50');
            likeBtn.classList.add('bg-red-50', 'text-red-500', 'border-red-200');
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
        } else {
            likeBtn.classList.remove('bg-red-50', 'text-red-500', 'border-red-200');
            likeBtn.classList.add('bg-white', 'text-gray-600', 'border-gray-200', 'hover:bg-gray-50');
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
        }
    });

    // Handle click to toggle like
    likeBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const user = auth.currentUser;
        if (!user) {
            alert('Please sign in to like this site.');
            return;
        }
        const userLikeRef = db.ref(`siteLikes/main/${user.uid}`);
        try {
            const snap = await userLikeRef.once('value');
            if (snap.exists()) {
                await userLikeRef.remove();
            } else {
                await userLikeRef.set(true);
            }
        } catch (err) {
            console.error('Like toggle failed:', err);
            alert('Failed to update like.');
        }
    });

    // Re‑evaluate liked state when auth changes
    auth.onAuthStateChanged(() => {
        // The value listener will automatically update the UI
    });
})();