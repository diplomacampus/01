// Live Likes & Floating Helpers (assets/js/analytics-likes.js)
(function() {
    const floatContainer = document.createElement('div');
    floatContainer.className = 'fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2.5';
    floatContainer.innerHTML = `
    <button id="dc-top-btn" class="w-11 h-11 rounded-full bg-white/95 backdrop-blur shadow-lg border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-300 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 hover:scale-105" title="Scroll to top">
        <i class="fa-solid fa-arrow-up text-sm"></i>
    </button>
    <button id="dc-like-btn" class="flex items-center gap-2 bg-white/95 backdrop-blur shadow-xl border border-slate-200 hover:border-red-200 px-4 py-2.5 rounded-full text-slate-700 hover:bg-red-50/50 transition-all duration-300 hover:scale-105" title="Like Diploma Campus">
        <i id="dc-like-icon" class="fa-regular fa-heart text-red-500 text-base"></i>
        <span id="dc-like-count" class="text-xs font-extrabold text-slate-800">4,820</span>
    </button>
    `;
    document.body.appendChild(floatContainer);

    const topBtn = document.getElementById('dc-top-btn');
    const likeBtn = document.getElementById('dc-like-btn');
    const likeIcon = document.getElementById('dc-like-icon');
    const likeCount = document.getElementById('dc-like-count');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn?.classList.remove('opacity-0', 'pointer-events-none');
            topBtn?.classList.add('opacity-100', 'pointer-events-auto');
        } else {
            topBtn?.classList.add('opacity-0', 'pointer-events-none');
            topBtn?.classList.remove('opacity-100', 'pointer-events-auto');
        }
    });

    topBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let count = parseInt(localStorage.getItem('dc_site_likes') || '4820', 10);
    let isLiked = localStorage.getItem('dc_site_is_liked') === 'true';

    function updateLikeUI() {
        if (likeCount) likeCount.textContent = count.toLocaleString();
        if (isLiked) {
            likeIcon?.classList.remove('fa-regular');
            likeIcon?.classList.add('fa-solid');
            likeBtn?.classList.add('bg-red-50', 'border-red-300', 'text-red-600');
        } else {
            likeIcon?.classList.remove('fa-solid');
            likeIcon?.classList.add('fa-regular');
            likeBtn?.classList.remove('bg-red-50', 'border-red-300', 'text-red-600');
        }
    }

    updateLikeUI();

    likeBtn?.addEventListener('click', () => {
        isLiked = !isLiked;
        count = isLiked ? count + 1 : count - 1;
        localStorage.setItem('dc_site_likes', count);
        localStorage.setItem('dc_site_is_liked', isLiked);
        updateLikeUI();
        if (window.showToast) {
            window.showToast(isLiked ? '❤️ Thank you for supporting Diploma Campus!' : 'Like removed', 'success');
        }
    });
})();
