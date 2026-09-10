// Toast Notification System (assets/js/toast.js)
(function() {
    let toastEl = document.getElementById('dc-toast');
    if (!toastEl) {
        toastEl = document.createElement('div');
        toastEl.id = 'dc-toast';
        toastEl.className = 'fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-2xl text-sm font-medium opacity-0 pointer-events-none transition-all duration-300 z-[9999] flex items-center gap-2.5 border border-slate-700/60';
        document.body.appendChild(toastEl);
    }

    let hideTimer = null;
    window.showToast = function(message, type = 'success') {
        let icon = '<i class="fa-regular fa-circle-check text-teal-400 text-base"></i>';
        if (type === 'error') {
            icon = '<i class="fa-regular fa-circle-xmark text-red-400 text-base"></i>';
        } else if (type === 'info') {
            icon = '<i class="fa-solid fa-circle-info text-blue-400 text-base"></i>';
        }

        toastEl.innerHTML = icon + '<span>' + message + '</span>';
        toastEl.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        toastEl.classList.add('opacity-100', 'translate-y-0');

        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
            toastEl.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            toastEl.classList.remove('opacity-100', 'translate-y-0');
        }, 2600);
    };
})();
