
   
        const hamburger = document.getElementById('hamburger');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        function openSidebar() {
            sidebar.classList.add('open');
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.classList.add('opacity-100', 'pointer-events-auto');
            hamburger.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden'; 
        }

        function closeSidebar() {
            sidebar.classList.remove('open');
            overlay.classList.remove('opacity-100', 'pointer-events-auto');
            overlay.classList.add('opacity-0', 'pointer-events-none');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = ''; 
        }

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); 
            if (sidebar.classList.contains('open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('open')) {
                if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
                    closeSidebar();
                }
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('open')) {
                closeSidebar();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024 && sidebar.classList.contains('open')) {
                closeSidebar();
            }
        });
    