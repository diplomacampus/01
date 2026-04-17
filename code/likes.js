// likes.js
(function() {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAaAbo8Q0fhXpMF1tgypr8dkvhBGyQQWig",
        authDomain: "diplomacampus.firebaseapp.com",
        databaseURL: "https://diplomacampus-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "diplomacampus",
        storageBucket: "diplomacampus.firebasestorage.app",
        messagingSenderId: "330061663460",
        appId: "1:330061663460:web:9d22eb10f9a821445b30f1"
    };

    // Initialize Firebase
    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.database();
    const auth = firebase.auth();

    // ----- SITE LIKE BUTTON (bottom-right) -----
    const likeBtn = document.createElement('button');
    likeBtn.id = 'site-like-button';
    likeBtn.className = 'fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all duration-200 bg-white text-gray-600 border border-gray-200 hover:bg-gray-50';
    likeBtn.setAttribute('title', 'Like this site');
    likeBtn.innerHTML = `
        <i class="fa-regular fa-heart text-lg"></i>
        <span class="text-sm font-semibold" id="site-like-count">0</span>
    `;
    document.body.appendChild(likeBtn);

    const heartIcon = likeBtn.querySelector('i');
    const countSpan = document.getElementById('site-like-count');

    const siteLikesRef = db.ref('siteLikes/main');
    siteLikesRef.on('value', (snapshot) => {
        const likes = snapshot.val() || {};
        const likeCount = Object.keys(likes).length;
        const currentUser = auth.currentUser;
        const isLiked = currentUser && likes[currentUser.uid] === true;

        countSpan.textContent = likeCount;

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

    // ----- GO TO TOP BUTTON (above the like button) -----
    const topBtn = document.createElement('button');
    topBtn.id = 'go-to-top-btn';
    topBtn.className = 'fixed bottom-24 right-6 z-40 flex items-center justify-center w-10 h-10 rounded-full shadow-lg bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-all duration-300 opacity-0 scale-90 pointer-events-none';
    topBtn.setAttribute('title', 'Go to top');
    topBtn.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
    document.body.appendChild(topBtn);

    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.classList.remove('opacity-0', 'scale-90', 'pointer-events-none');
            topBtn.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
        } else {
            topBtn.classList.add('opacity-0', 'scale-90', 'pointer-events-none');
            topBtn.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
        }
    });

    // Smooth scroll to top on click
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Re‑evaluate liked state when auth changes
    auth.onAuthStateChanged(() => {});
})();