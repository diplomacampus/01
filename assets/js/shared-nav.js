// Global Responsive Navigation (assets/js/shared-nav.js)
(function() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Theme Management Helper
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        updateThemeToggleIcons();
    }

    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeToggleIcons();
        if (window.showToast) {
            window.showToast(isDark ? '🌙 Switched to Dark Mode' : '☀️ Switched to Light Mode', 'info');
        }
    }

    function updateThemeToggleIcons() {
        const isDark = document.documentElement.classList.contains('dark');
        document.querySelectorAll('.dc-theme-toggle-icon').forEach(icon => {
            if (isDark) {
                icon.className = 'fa-solid fa-sun dc-theme-toggle-icon text-amber-400 text-sm transition-transform duration-300 rotate-0';
            } else {
                icon.className = 'fa-solid fa-moon dc-theme-toggle-icon text-slate-600 text-sm transition-transform duration-300 rotate-0';
            }
        });
        document.querySelectorAll('.dc-theme-toggle-text').forEach(el => {
            el.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        });
    }

    // Run theme initialization immediately
    initTheme();

    const searchModalHTML = `
    <div id="dc-search-modal" class="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[999] hidden items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4 transition-opacity duration-200 opacity-0" role="dialog" aria-modal="true" aria-label="Global Search">
        <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transform scale-95 transition-all duration-200 modal-content">
            <div class="flex items-center px-4 py-3 sm:py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-850">
                <i class="fa-solid fa-magnifying-glass text-sky-600 dark:text-sky-400 text-base sm:text-lg mr-3 shrink-0"></i>
                <input type="text" id="dc-global-search-input" placeholder="Search notes, PYQs, colleges, syllabus, D2D..." 
                    class="w-full bg-transparent text-slate-800 dark:text-white text-sm sm:text-base font-medium outline-none placeholder:text-slate-400">
                <button id="dc-search-close-btn" title="Close Search (Esc)" class="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1.5 sm:p-2 rounded-xl text-base ml-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition shrink-0">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div id="dc-search-results" class="max-h-[65vh] overflow-y-auto p-3 sm:p-4 divide-y divide-slate-100 dark:divide-slate-800 custom-scroll">
                <div class="text-center py-8 text-slate-400">
                    <i class="fa-solid fa-compass text-3xl mb-2 text-sky-500/40 block"></i>
                    <p class="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">Type to search anything across Diploma Campus</p>
                    <div class="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4">
                        <span class="cursor-pointer search-tag text-[11px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition" data-query="GP Ranchi">GP Ranchi</span>
                        <span class="cursor-pointer search-tag text-[11px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition" data-query="Mathematics">Mathematics</span>
                        <span class="cursor-pointer search-tag text-[11px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition" data-query="D2D">D2D Lateral Entry</span>
                        <span class="cursor-pointer search-tag text-[11px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition" data-query="Mock Test">Mock Tests</span>
                        <span class="cursor-pointer search-tag text-[11px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition" data-query="Predictor">College Predictor</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    const isResourcesActive = currentPath === 'resources.html' || currentPath === 'question-papers.html';
    const isExamsActive = currentPath === 'exam-preparation.html' || currentPath === 'exam-detail.html';
    const isMoreActive = ['tools.html', 'qna.html', 'QnA.html', 'video-lectures.html'].includes(currentPath);

    const headerContainer = document.getElementById('dc-header-mount') || document.getElementById('dc-global-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
        <header id="dc-main-header" class="fixed top-0 left-0 w-full z-40 glass-header border-b border-slate-200/80 dark:border-slate-800/80 transition-all duration-300">
            <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
                
                <!-- Brand Logo & Name -->
                <a href="index.html" class="flex items-center gap-2.5 shrink-0 group min-w-0" aria-label="Diploma Campus Home">
                    <img src="assets/images/logo.png" alt="Diploma Campus Logo" class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-contain bg-white dark:bg-slate-800 p-0.5 shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300 border border-slate-200/60 dark:border-slate-700/60 shrink-0">
                    <div class="flex flex-col min-w-0 justify-center">
                        <span class="font-heading font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                            DIPLOMA <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">CAMPUS</span>
                        </span>
                        <span class="text-[9px] sm:text-[10px] font-semibold text-slate-400 dark:text-slate-400 tracking-wider uppercase truncate mt-0.5">Jharkhand Polytechnic</span>
                    </div>
                </a>

                <!-- Desktop Navigation Links -->
                <nav class="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[13px] font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap" aria-label="Main Navigation">
                    <a href="index.html" class="px-3 py-2 rounded-xl hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition ${currentPath === 'index.html' || currentPath === '' ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900/60' : ''}">Home</a>
                    
                    <!-- Resources Interactive Dropdown -->
                    <div class="relative group">
                        <a href="resources.html" class="px-3 py-2 rounded-xl hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition flex items-center gap-1.5 ${isResourcesActive ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900/60' : ''}">
                            <span>Resources</span>
                            <i class="fa-solid fa-chevron-down text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200"></i>
                        </a>
                        <div class="absolute left-0 top-full pt-1.5 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div class="p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-900/15 divide-y divide-slate-100 dark:divide-slate-800">
                                <div class="space-y-0.5 pb-1.5">
                                    <a href="resources.html?type=Notes" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition">
                                        <span class="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-book-open"></i></span>
                                        <div>
                                            <div class="font-bold">Notes</div>
                                            <div class="text-[10px] text-slate-400 font-normal">Handwritten & theory</div>
                                        </div>
                                    </a>
                                    <a href="resources.html?type=PYQs" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-purple-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition">
                                        <span class="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-file-lines"></i></span>
                                        <div>
                                            <div class="font-bold">PYQs</div>
                                            <div class="text-[10px] text-slate-400 font-normal">Previous year question papers</div>
                                        </div>
                                    </a>
                                    <a href="resources.html?type=Important+Questions" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-amber-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition">
                                        <span class="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-star"></i></span>
                                        <div>
                                            <div class="font-bold">Important Questions</div>
                                            <div class="text-[10px] text-slate-400 font-normal">MIQ / VVI Exam questions</div>
                                        </div>
                                    </a>
                                    <a href="resources.html?type=Sample+Papers" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                                        <span class="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-file-circle-check"></i></span>
                                        <div>
                                            <div class="font-bold">Sample Papers</div>
                                            <div class="text-[10px] text-slate-400 font-normal">Model question papers</div>
                                        </div>
                                    </a>
                                    <a href="resources.html?type=Syllabus" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        <span class="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-graduation-cap"></i></span>
                                        <div>
                                            <div class="font-bold">Syllabus</div>
                                            <div class="text-[10px] text-slate-400 font-normal">JUT branch curricula</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="pt-1.5">
                                    <a href="resources.html" class="flex items-center justify-between px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950/60 text-sky-600 dark:text-sky-400 transition">
                                        <span>All Study Materials</span>
                                        <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="exam-preparation.html" class="px-3 py-2 rounded-xl hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition ${isExamsActive ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900/60' : ''}">Exams</a>
                    
                    <a href="d2d.html" class="px-3 py-2 rounded-xl hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/70 dark:hover:bg-slate-800 transition flex items-center gap-1.5 ${currentPath === 'd2d.html' ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/70 font-bold border border-amber-200 dark:border-amber-900/60' : ''}">
                        <span>D2D</span>
                        <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                    </a>

                    <a href="test-series.html" class="px-3 py-2 rounded-xl hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition ${currentPath === 'test-series.html' ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900/60' : ''}">Mock Tests</a>
                    <a href="colleges.html" class="px-3 py-2 rounded-xl hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition ${currentPath === 'colleges.html' || currentPath === 'college-detail.html' ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900/60' : ''}">Colleges</a>
                    
                    <!-- More Dropdown (Tools, Community, Videos) -->
                    <div class="relative group">
                        <button type="button" class="px-3 py-2 rounded-xl hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition flex items-center gap-1.5 ${isMoreActive ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900/60' : ''}">
                            <span>Explore</span>
                            <i class="fa-solid fa-chevron-down text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200"></i>
                        </button>
                        <div class="absolute right-0 top-full pt-1.5 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div class="p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-900/15 space-y-0.5">
                                <a href="tools.html" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition ${currentPath === 'tools.html' ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 font-bold' : ''}">
                                    <span class="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-calculator"></i></span>
                                    <div>
                                        <div class="font-bold">Calculators & Tools</div>
                                        <div class="text-[10px] text-slate-400 font-normal">CGPA & Predictors</div>
                                    </div>
                                </a>
                                <a href="qna.html" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition ${currentPath === 'qna.html' || currentPath === 'QnA.html' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 font-bold' : ''}">
                                    <span class="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0"><i class="fa-regular fa-comments"></i></span>
                                    <div>
                                        <div class="font-bold">Q&A Community</div>
                                        <div class="text-[10px] text-slate-400 font-normal">Ask & discuss</div>
                                    </div>
                                </a>
                                <a href="video-lectures.html" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-rose-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition ${currentPath === 'video-lectures.html' ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 font-bold' : ''}">
                                    <span class="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs shrink-0"><i class="fa-brands fa-youtube"></i></span>
                                    <div>
                                        <div class="font-bold">Video Lectures</div>
                                        <div class="text-[10px] text-slate-400 font-normal">Curated playlists</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Action Controls (Responsive & Clean) -->
                <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    
                    <!-- Search Command Trigger Button -->
                    <button id="dc-nav-search-btn" title="Search (Ctrl + K)" aria-label="Search" class="h-9 sm:h-9.5 flex items-center justify-center gap-2 bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 px-2.5 sm:px-3 rounded-xl text-xs font-medium transition border border-slate-200/50 dark:border-slate-700/50 shadow-2xs">
                        <i class="fa-solid fa-magnifying-glass text-sky-600 dark:text-sky-400 text-xs sm:text-sm"></i>
                        <span class="hidden md:inline text-slate-500 dark:text-slate-400">Search...</span>
                        <kbd class="hidden xl:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shadow-2xs">Ctrl K</kbd>
                    </button>

                    <!-- Theme Toggle Button -->
                    <button id="dc-theme-toggle-btn" title="Toggle Theme" aria-label="Toggle Dark/Light Theme" class="h-9 w-9 sm:h-9.5 sm:w-9.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center transition text-slate-700 dark:text-slate-200 shadow-2xs">
                        <i class="fa-solid fa-moon dc-theme-toggle-icon"></i>
                    </button>

                    <!-- Share Button (Visible on sm+ screens) -->
                    <button id="dc-nav-share-btn" title="Share Diploma Campus" aria-label="Share page link" class="hidden sm:flex h-9 w-9 sm:h-9.5 sm:w-9.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 items-center justify-center transition shadow-2xs">
                        <i class="fa-solid fa-share-nodes text-xs sm:text-sm"></i>
                    </button>

                    <!-- Sign In Button (When Logged Out) -->
                    <a href="login.html" id="dc-nav-login-btn" class="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-95">
                        <i class="fa-solid fa-arrow-right-to-bracket text-xs"></i>
                        <span>Sign In</span>
                    </a>

                    <!-- User Profile Dropdown (When Logged In) -->
                    <div id="dc-nav-user-dropdown" class="relative hidden">
                        <button id="dc-nav-avatar-btn" type="button" aria-expanded="false" class="flex items-center focus:outline-none ring-offset-2 ring-sky-500 rounded-xl">
                            <img id="dc-nav-avatar" src="https://ui-avatars.com/api/?name=Student&background=0284c7&color=fff" 
                                alt="Profile Avatar" 
                                class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border-2 border-sky-500 object-cover cursor-pointer hover:ring-2 hover:ring-sky-400 transition shadow-sm">
                        </button>

                        <!-- User Popup Menu -->
                        <div id="dc-nav-user-menu" class="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-900/20 p-2 hidden z-50 transform origin-top-right transition-all">
                            <div class="px-2.5 py-2 border-b border-slate-100 dark:border-slate-800 mb-1">
                                <p id="dc-nav-user-name" class="text-xs font-bold text-slate-900 dark:text-white truncate">Student User</p>
                                <p id="dc-nav-user-email" class="text-[10px] text-slate-400 truncate">student@diplomacampus.in</p>
                            </div>
                            <div class="space-y-0.5">
                                <a id="dc-nav-admin-link" href="admin.html" class="hidden flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition">
                                    <i class="fa-solid fa-shield-halved text-xs"></i> Admin Panel
                                </a>
                                <a href="login.html" class="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition">
                                    <i class="fa-solid fa-gauge text-xs text-sky-500"></i> Dashboard
                                </a>
                                <a href="resources.html" class="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition">
                                    <i class="fa-solid fa-bookmark text-xs text-purple-500"></i> Study Materials
                                </a>
                            </div>
                            <div class="pt-1 mt-1 border-t border-slate-100 dark:border-slate-800">
                                <button id="dc-nav-logout-btn" class="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 transition text-left">
                                    <i class="fa-solid fa-arrow-right-from-bracket text-xs"></i> Sign Out
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Hamburger Menu Button -->
                    <button id="dc-mobile-menu-toggle" class="lg:hidden h-9 w-9 sm:h-9.5 sm:w-9.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-sm transition border border-slate-200/50 dark:border-slate-700/50 shadow-2xs" aria-label="Toggle navigation menu">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </button>
                </div>
            </div>
        </header>

        <!-- Dynamic Nav Spacer that perfectly prevents content from hiding behind fixed header -->
        <div id="dc-nav-spacer" class="h-16 w-full shrink-0 transition-all" aria-hidden="true"></div>

        <!-- Mobile Sidebar Drawer Backdrop -->
        <div id="dc-sidebar-overlay" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 hidden transition-opacity duration-300 opacity-0" aria-hidden="true"></div>

        <!-- Mobile Sidebar Drawer -->
        <aside id="dc-sidebar" class="fixed top-0 right-0 w-[310px] xs:w-[330px] sm:w-[360px] max-w-[88vw] h-full bg-white dark:bg-slate-900 z-50 transform translate-x-full transition-transform duration-300 ease-out shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-800" aria-label="Mobile Navigation">
            <!-- Sidebar Header -->
            <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-850">
                <div class="flex items-center gap-2.5">
                    <img src="assets/images/logo.png" alt="Diploma Campus" class="w-8 h-8 rounded-xl object-contain bg-white dark:bg-slate-800 p-0.5 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
                    <div>
                        <h4 class="font-heading font-extrabold text-sm text-slate-900 dark:text-white leading-tight">Diploma Campus</h4>
                        <p class="text-[9px] text-sky-600 dark:text-sky-400 font-bold tracking-wide uppercase">Jharkhand Student Portal</p>
                    </div>
                </div>
                <div class="flex items-center gap-1.5">
                    <button id="dc-sidebar-theme-toggle" title="Toggle Theme" aria-label="Toggle theme" class="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition">
                        <i class="fa-solid fa-moon dc-theme-toggle-icon text-xs"></i>
                    </button>
                    <button id="dc-sidebar-close" aria-label="Close menu" class="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition">
                        <i class="fa-solid fa-xmark text-sm"></i>
                    </button>
                </div>
            </div>

            <!-- Quick Search Bar inside drawer -->
            <div class="p-3 border-b border-slate-100 dark:border-slate-800">
                <button id="dc-sidebar-search-trigger" class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                    <span class="flex items-center gap-2"><i class="fa-solid fa-magnifying-glass text-sky-500"></i> Search notes, PYQs, colleges...</span>
                    <span class="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-400 font-mono">⌘K</span>
                </button>
            </div>

            <!-- Sidebar Navigation Links List -->
            <nav class="flex-1 overflow-y-auto p-3 space-y-1 text-xs font-medium custom-scroll">
                <a href="index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${currentPath === 'index.html' || currentPath === '' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-house w-4 text-center text-xs"></i> <span>Home</span>
                </a>
                <a href="colleges.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${currentPath === 'colleges.html' || currentPath === 'college-detail.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-building-columns w-4 text-center text-xs"></i> <span>Polytechnic Colleges</span>
                </a>

                <!-- Resources Group in Sidebar -->
                <div class="pt-2 pb-1">
                    <div class="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center justify-between">
                        <span>Study Material Hub</span>
                        <i class="fa-solid fa-book-bookmark text-[9px]"></i>
                    </div>
                    <div class="mt-1 space-y-0.5">
                        <a href="resources.html" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold ${currentPath === 'resources.html' && !window.location.search ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'} transition">
                            <i class="fa-solid fa-layer-group w-4 text-center text-slate-400 text-xs"></i> <span>All Resources</span>
                        </a>
                        <a href="resources.html?type=Notes" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 transition">
                            <i class="fa-solid fa-book-open w-4 text-center text-sky-500 text-xs"></i> <span>Notes (Handwritten & Theory)</span>
                        </a>
                        <a href="resources.html?type=PYQs" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-purple-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-600 transition">
                            <i class="fa-solid fa-file-lines w-4 text-center text-purple-500 text-xs"></i> <span>PYQs (Question Papers)</span>
                        </a>
                        <a href="resources.html?type=Important+Questions" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-amber-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 transition">
                            <i class="fa-solid fa-star w-4 text-center text-amber-500 text-xs"></i> <span>Important Questions (MIQ)</span>
                        </a>
                        <a href="resources.html?type=Sample+Papers" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition">
                            <i class="fa-solid fa-file-circle-check w-4 text-center text-emerald-500 text-xs"></i> <span>Sample Papers</span>
                        </a>
                        <a href="resources.html?type=Syllabus" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition">
                            <i class="fa-solid fa-graduation-cap w-4 text-center text-indigo-500 text-xs"></i> <span>Official Syllabus</span>
                        </a>
                    </div>
                </div>

                <div class="pt-1 pb-1"><hr class="border-slate-100 dark:border-slate-800"></div>

                <!-- Exams & Practice -->
                <div class="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center justify-between">
                    <span>Exams & Tests</span>
                    <i class="fa-solid fa-bullseye text-[9px]"></i>
                </div>
                <a href="exam-preparation.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${currentPath === 'exam-preparation.html' || currentPath === 'exam-detail.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-award w-4 text-center text-xs text-sky-500"></i> <span>Exam Preparation</span>
                </a>
                <a href="d2d.html" class="flex items-center justify-between px-3 py-2.5 rounded-xl transition ${currentPath === 'd2d.html' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-bolt w-4 text-center text-xs text-amber-500"></i> <span>D2D Lateral Entry</span></span>
                    <span class="text-[9px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full">Hot</span>
                </a>
                <a href="test-series.html" class="flex items-center justify-between px-3 py-2.5 rounded-xl transition ${currentPath === 'test-series.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-list-check w-4 text-center text-xs text-sky-500"></i> <span>CBT Mock Tests</span></span>
                    <span class="text-[9px] bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-bold px-2 py-0.5 rounded-full">150 Q</span>
                </a>

                <div class="pt-1 pb-1"><hr class="border-slate-100 dark:border-slate-800"></div>

                <!-- Tools & Community -->
                <div class="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center justify-between">
                    <span>Tools & Community</span>
                    <i class="fa-solid fa-screwdriver-wrench text-[9px]"></i>
                </div>
                <a href="tools.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${currentPath === 'tools.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-calculator w-4 text-center text-xs text-sky-500"></i> <span>Predictors & Tools</span>
                </a>
                <a href="qna.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${currentPath === 'qna.html' || currentPath === 'QnA.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-regular fa-comments w-4 text-center text-xs text-emerald-500"></i> <span>Q&A Community</span>
                </a>
                <a href="video-lectures.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${currentPath === 'video-lectures.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-brands fa-youtube w-4 text-center text-xs text-rose-500"></i> <span>Video Lectures</span>
                </a>

                <div class="pt-2 pb-1"><hr class="border-slate-100 dark:border-slate-800"></div>

                <!-- Branch Hubs Grid -->
                <div class="px-1 py-1">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 px-1">Branch Portals</span>
                    <div class="grid grid-cols-3 gap-1 text-[11px]">
                        <a href="cse.html" class="px-2 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition text-center font-semibold">CSE</a>
                        <a href="mech.html" class="px-2 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition text-center font-semibold">Mech</a>
                        <a href="civil.html" class="px-2 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition text-center font-semibold">Civil</a>
                        <a href="ee.html" class="px-2 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition text-center font-semibold">EE</a>
                        <a href="ece.html" class="px-2 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition text-center font-semibold">ECE</a>
                        <a href="auto.html" class="px-2 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition text-center font-semibold">Auto</a>
                    </div>
                </div>

                <!-- Quick Share on Mobile -->
                <div class="pt-2 pb-1">
                    <button id="dc-sidebar-share-btn" class="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 text-slate-700 dark:text-slate-300 hover:text-sky-600 text-xs font-semibold transition">
                        <i class="fa-solid fa-share-nodes text-sky-500"></i>
                        <span>Share Diploma Campus</span>
                    </button>
                </div>
            </nav>

            <!-- Sidebar Auth Profile Footer -->
            <div id="dc-sidebar-auth" class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-850 shrink-0">
                <a href="login.html" class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold py-2.5 rounded-xl shadow-md transition text-xs">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In / Dashboard
                </a>
            </div>
        </aside>
        `;
    }

    // Insert Search Modal into body if not present
    if (!document.getElementById('dc-search-modal')) {
        document.body.insertAdjacentHTML('beforeend', searchModalHTML);
    }

    // Theme Switch Event Listeners
    const themeToggleBtn = document.getElementById('dc-theme-toggle-btn');
    const sidebarThemeToggleBtn = document.getElementById('dc-sidebar-theme-toggle');
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (sidebarThemeToggleBtn) sidebarThemeToggleBtn.addEventListener('click', toggleTheme);

    // Header Scroll Shadow Effect
    const mainHeader = document.getElementById('dc-main-header');
    function handleScrollShadow() {
        if (!mainHeader) return;
        if (window.scrollY > 8) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScrollShadow, { passive: true });
    handleScrollShadow();

    // Mobile Sidebar Elements & Handlers
    const menuToggle = document.getElementById('dc-mobile-menu-toggle');
    const sidebar = document.getElementById('dc-sidebar');
    const overlay = document.getElementById('dc-sidebar-overlay');
    const sidebarClose = document.getElementById('dc-sidebar-close');
    const sidebarSearchTrigger = document.getElementById('dc-sidebar-search-trigger');

    function openSidebar() {
        if (!sidebar || !overlay) return;
        overlay.classList.remove('hidden');
        setTimeout(() => {
            overlay.classList.remove('opacity-0');
            sidebar.classList.remove('translate-x-full');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        if (!sidebar || !overlay) return;
        overlay.classList.add('opacity-0');
        sidebar.classList.add('translate-x-full');
        setTimeout(() => overlay.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }

    if (menuToggle) menuToggle.addEventListener('click', openSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    if (sidebarSearchTrigger) {
        sidebarSearchTrigger.addEventListener('click', () => {
            closeSidebar();
            setTimeout(() => {
                const navSearchBtn = document.getElementById('dc-nav-search-btn');
                if (navSearchBtn) navSearchBtn.click();
            }, 320);
        });
    }

    // Desktop User Profile Menu Toggle
    const avatarBtn = document.getElementById('dc-nav-avatar-btn');
    const userMenu = document.getElementById('dc-nav-user-menu');
    const navLogoutBtn = document.getElementById('dc-nav-logout-btn');

    if (avatarBtn && userMenu) {
        avatarBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = userMenu.classList.contains('hidden');
            if (isHidden) {
                userMenu.classList.remove('hidden');
                avatarBtn.setAttribute('aria-expanded', 'true');
            } else {
                userMenu.classList.add('hidden');
                avatarBtn.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('click', (e) => {
            if (!userMenu.contains(e.target) && !avatarBtn.contains(e.target)) {
                userMenu.classList.add('hidden');
                avatarBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (navLogoutBtn) {
        navLogoutBtn.addEventListener('click', () => {
            if (window.DC_AUTH && typeof window.DC_AUTH.logout === 'function') {
                window.DC_AUTH.logout();
            }
        });
    }

    // Global Keydown Listeners (Ctrl/Cmd+K for search, Escape to close modals)
    document.addEventListener('keydown', (e) => {
        // Ctrl+K or Cmd+K or Slash (when not focused in an input) opens search
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
            e.preventDefault();
            const searchBtn = document.getElementById('dc-nav-search-btn');
            if (searchBtn) searchBtn.click();
        } else if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
            e.preventDefault();
            const searchBtn = document.getElementById('dc-nav-search-btn');
            if (searchBtn) searchBtn.click();
        } else if (e.key === 'Escape') {
            closeSidebar();
            if (userMenu) userMenu.classList.add('hidden');
            const searchClose = document.getElementById('dc-search-close-btn');
            if (searchClose) searchClose.click();
        }
    });

    // Share Button Handler (Header & Sidebar)
    function handleShare() {
        const data = {
            title: 'Diploma Campus — Jharkhand Polytechnic Student Hub',
            text: 'Access free Jharkhand Polytechnic notes, syllabus, PYQs, and mock tests!',
            url: window.location.href
        };
        if (navigator.share) {
            navigator.share(data).catch(() => {});
        } else {
            navigator.clipboard?.writeText(window.location.href).then(() => {
                if (window.showToast) window.showToast('🔗 Link copied to clipboard!', 'success');
                else alert('Link copied to clipboard!');
            }).catch(() => {
                if (window.showToast) window.showToast('Failed to copy link', 'error');
            });
        }
    }

    const shareBtn = document.getElementById('dc-nav-share-btn');
    const sidebarShareBtn = document.getElementById('dc-sidebar-share-btn');
    if (shareBtn) shareBtn.addEventListener('click', handleShare);
    if (sidebarShareBtn) sidebarShareBtn.addEventListener('click', handleShare);

    // Auth Change Event Handler
    window.addEventListener('dc-auth-change', (e) => {
        const { user, isAdmin } = e.detail || {};
        const loginBtn = document.getElementById('dc-nav-login-btn');
        const userDropdown = document.getElementById('dc-nav-user-dropdown');
        const userAvatar = document.getElementById('dc-nav-avatar');
        const userNameEl = document.getElementById('dc-nav-user-name');
        const userEmailEl = document.getElementById('dc-nav-user-email');
        const adminLink = document.getElementById('dc-nav-admin-link');
        const sidebarAuth = document.getElementById('dc-sidebar-auth');

        // Check or create admin nav button
        let adminNavBtn = document.getElementById('dc-nav-admin-btn');
        if (!adminNavBtn && loginBtn && loginBtn.parentNode) {
            adminNavBtn = document.createElement('a');
            adminNavBtn.id = 'dc-nav-admin-btn';
            adminNavBtn.href = 'admin.html';
            adminNavBtn.className = 'hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 text-xs font-bold hover:bg-rose-600 hover:text-white transition shadow-sm';
            adminNavBtn.innerHTML = '<i class="fa-solid fa-shield-halved"></i> <span>Admin</span>';
            loginBtn.parentNode.insertBefore(adminNavBtn, loginBtn);
        }

        if (isAdmin) {
            if (adminNavBtn) adminNavBtn.classList.remove('hidden');
            if (adminLink) adminLink.classList.remove('hidden');
        } else {
            if (adminNavBtn) adminNavBtn.classList.add('hidden');
            if (adminLink) adminLink.classList.add('hidden');
        }

        if (user) {
            if (loginBtn) loginBtn.classList.add('hidden');
            if (userDropdown) {
                userDropdown.classList.remove('hidden');
                const displayName = user.displayName || user.email?.split('@')[0] || (isAdmin ? 'Admin' : 'Student');
                const photo = user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0284c7&color=fff`;
                if (userAvatar) {
                    userAvatar.src = photo;
                    userAvatar.title = isAdmin ? "Administrator" : displayName;
                }
                if (userNameEl) userNameEl.textContent = displayName + (isAdmin ? ' 🛡️' : '');
                if (userEmailEl) userEmailEl.textContent = user.email || 'Student';
            }
            if (sidebarAuth) {
                const displayName = user.displayName || user.email?.split('@')[0] || (isAdmin ? 'Admin' : 'Student');
                const photo = user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0284c7&color=fff`;
                sidebarAuth.innerHTML = `
                <div class="flex items-center gap-2.5 mb-2.5">
                    <img src="${photo}" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 object-cover bg-white" alt="User Avatar">
                    <div class="overflow-hidden">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${displayName} ${isAdmin ? '🛡️' : ''}</p>
                        <p class="text-[10px] text-slate-400 truncate">${user.email || 'Student'}</p>
                    </div>
                </div>
                ${isAdmin ? `
                <div class="mb-2">
                    <a href="admin.html" class="w-full flex items-center justify-center gap-2 py-2 bg-rose-600 text-white hover:bg-rose-700 rounded-xl text-xs font-bold transition shadow-sm">
                        <i class="fa-solid fa-shield-halved"></i> Admin Control Center
                    </a>
                </div>
                ` : ''}
                <div class="grid grid-cols-2 gap-2">
                    <a href="login.html" class="text-center py-2 bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 hover:bg-sky-100 rounded-xl text-xs font-bold transition">Dashboard</a>
                    <button id="dc-sidebar-logout" class="py-2 bg-red-50 dark:bg-red-950/50 text-red-600 hover:bg-red-100 rounded-xl text-xs font-bold transition">Sign Out</button>
                </div>
                `;
                document.getElementById('dc-sidebar-logout')?.addEventListener('click', () => {
                    if (window.DC_AUTH && typeof window.DC_AUTH.logout === 'function') {
                        window.DC_AUTH.logout();
                    }
                });
            }
        } else {
            if (loginBtn) loginBtn.classList.remove('hidden');
            if (userDropdown) userDropdown.classList.add('hidden');
            if (sidebarAuth) {
                sidebarAuth.innerHTML = `
                <a href="login.html" class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold py-2.5 rounded-xl shadow-md transition text-xs">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In / Dashboard
                </a>
                `;
            }
        }
    });

    // Dynamic Navigation Spacer Height Sync
    function syncNavSpacer() {
        const header = document.getElementById('dc-main-header') || document.querySelector('#dc-header-mount header, #dc-global-header header');
        const spacer = document.getElementById('dc-nav-spacer');
        if (header && spacer) {
            const h = header.getBoundingClientRect().height;
            if (h > 0) {
                spacer.style.height = `${h}px`;
                document.documentElement.style.setProperty('--dc-nav-height', `${h}px`);
            }
        }
    }

    window.addEventListener('resize', syncNavSpacer, { passive: true });
    window.addEventListener('orientationchange', syncNavSpacer, { passive: true });
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            syncNavSpacer();
            setTimeout(syncNavSpacer, 50);
            setTimeout(syncNavSpacer, 300);
        });
    } else {
        syncNavSpacer();
        setTimeout(syncNavSpacer, 50);
        setTimeout(syncNavSpacer, 300);
    }

    // PWA Manifest Injection & Service Worker Registration
    try {
        if (!document.querySelector('link[rel="manifest"]')) {
            const manifestLink = document.createElement('link');
            manifestLink.rel = 'manifest';
            manifestLink.href = 'manifest.json';
            document.head.appendChild(manifestLink);
        }
        if (!document.querySelector('meta[name="theme-color"]')) {
            const themeMeta = document.createElement('meta');
            themeMeta.name = 'theme-color';
            themeMeta.content = '#0284c7';
            document.head.appendChild(themeMeta);
        }
    } catch(e) {}

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').then((reg) => {
                console.log('[PWA] Service Worker registered with scope:', reg.scope);
            }).catch((err) => {
                console.log('[PWA] Service Worker registration failed:', err);
            });
        });
    }
})();
