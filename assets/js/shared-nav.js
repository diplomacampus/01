// Global Responsive Navigation & Header System (assets/js/shared-nav.js)
(function() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // ========================================================
    // 1. Theme Management
    // ========================================================
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
                icon.className = 'fa-solid fa-moon dc-theme-toggle-icon text-slate-600 dark:text-slate-300 text-sm transition-transform duration-300 rotate-0';
            }
        });
        document.querySelectorAll('.dc-theme-toggle-text').forEach(el => {
            el.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        });
    }

    // Initialize Theme immediately
    initTheme();

    // ========================================================
    // 2. Global Search Modal Component
    // ========================================================
    const searchModalHTML = `
    <div id="dc-search-modal" class="fixed inset-0 bg-slate-950/75 backdrop-blur-md z-[999] hidden items-start justify-center pt-14 sm:pt-20 px-3 sm:px-4 transition-opacity duration-200 opacity-0" role="dialog" aria-modal="true" aria-label="Global Search">
        <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden transform scale-95 transition-all duration-200 modal-content ring-1 ring-slate-900/5 dark:ring-white/10">
            <div class="flex items-center px-4 py-3.5 sm:py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-850/90">
                <div class="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center text-sm mr-3 shrink-0">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" id="dc-global-search-input" placeholder="Search notes, PYQs, colleges, syllabus, D2D..." 
                    class="w-full bg-transparent text-slate-800 dark:text-white text-sm sm:text-base font-medium outline-none placeholder:text-slate-400">
                <button id="dc-search-close-btn" title="Close Search (Esc)" class="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1.5 sm:p-2 rounded-xl text-base ml-2 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition shrink-0" aria-label="Close search modal">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div id="dc-search-results" class="max-h-[65vh] overflow-y-auto p-3 sm:p-4 divide-y divide-slate-100 dark:divide-slate-800 custom-scroll">
                <div class="text-center py-8 text-slate-400">
                    <i class="fa-solid fa-compass text-3xl mb-2 text-sky-500/40 block"></i>
                    <p class="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">Type to search anything across Diploma Campus</p>
                    <div class="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4">
                        <span class="cursor-pointer search-tag text-[11px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition border border-slate-200/50 dark:border-slate-700" data-query="GP Ranchi">GP Ranchi</span>
                        <span class="cursor-pointer search-tag text-[11px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition border border-slate-200/50 dark:border-slate-700" data-query="Mathematics">Mathematics</span>
                        <span class="cursor-pointer search-tag text-[11px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition border border-slate-200/50 dark:border-slate-700" data-query="D2D">D2D Lateral Entry</span>
                        <span class="cursor-pointer search-tag text-[11px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition border border-slate-200/50 dark:border-slate-700" data-query="Mock Test">Mock Tests</span>
                        <span class="cursor-pointer search-tag text-[11px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition border border-slate-200/50 dark:border-slate-700" data-query="Predictor">College Predictor</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    // Active path checks
    const isResourcesActive = currentPath === 'resources.html' || currentPath === 'question-papers.html';
    const isExamsActive = currentPath === 'exam-preparation.html' || currentPath === 'exam-detail.html';
    const isCollegesActive = currentPath === 'colleges.html' || currentPath === 'college-detail.html';
    const isD2DActive = currentPath === 'd2d.html';
    const isMoreActive = ['tools.html', 'qna.html', 'QnA.html', 'video-lectures.html', 'test-series.html', 'leaderboard.html'].includes(currentPath);

    // ========================================================
    // 3. Header Render Mount
    // ========================================================
    const headerContainer = document.getElementById('dc-header-mount') || document.getElementById('dc-global-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
        <header id="dc-main-header" class="fixed top-0 left-0 w-full z-40 glass-header transition-all duration-300">
            <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between gap-2 sm:gap-4">
                
                <!-- Brand Logo & Name -->
                <a href="index.html" class="flex items-center gap-2.5 sm:gap-3 shrink-0 group min-w-0" aria-label="Diploma Campus Home">
                    <div class="relative flex items-center justify-center">
                        <div class="absolute -inset-1 bg-gradient-to-tr from-sky-500/40 via-blue-500/20 to-indigo-500/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                        <img src="assets/images/logo.png" alt="Diploma Campus Logo" class="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-contain bg-white dark:bg-slate-900 p-1 shadow-sm group-hover:scale-105 transition-transform duration-300 border border-slate-200/80 dark:border-slate-700 shrink-0">
                    </div>
                    <div class="flex flex-col min-w-0 justify-center">
                        <div class="flex items-center gap-1.5">
                            <span class="font-heading font-black text-[15px] sm:text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                                DIPLOMA<span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 ml-1">CAMPUS</span>
                            </span>
                        </div>
                        <div class="flex items-center gap-1.5 mt-0.5">
                            <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span class="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-400 tracking-wider uppercase truncate">Jharkhand Hub</span>
                        </div>
                    </div>
                </a>

                <!-- Desktop Central Navigation Pills Container -->
                <nav class="hidden lg:flex items-center gap-1 text-[13px] font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap bg-slate-100/80 dark:bg-slate-800/70 p-1 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md shadow-xs" aria-label="Main Navigation">
                    
                    <!-- Home Link -->
                    <a href="index.html" class="px-3.5 py-1.5 rounded-xl transition-all duration-150 flex items-center gap-1.5 ${currentPath === 'index.html' || currentPath === '' ? 'text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-900 font-bold shadow-xs border border-slate-200/60 dark:border-slate-700/80' : 'hover:text-sky-600 dark:hover:text-sky-400 hover:bg-white/60 dark:hover:bg-slate-900/60'}">
                        <span>Home</span>
                    </a>
                    
                    <!-- Resources Mega Dropdown -->
                    <div class="relative group">
                        <a href="resources.html" class="px-3.5 py-1.5 rounded-xl transition-all duration-150 flex items-center gap-1.5 ${isResourcesActive ? 'text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-900 font-bold shadow-xs border border-slate-200/60 dark:border-slate-700/80' : 'hover:text-sky-600 dark:hover:text-sky-400 hover:bg-white/60 dark:hover:bg-slate-900/60'}">
                            <span>Resources</span>
                            <i class="fa-solid fa-chevron-down text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200"></i>
                        </a>
                        
                        <div class="absolute left-0 top-full pt-2 w-80 dc-dropdown-panel z-50">
                            <div class="p-2.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/5 dark:ring-white/10 space-y-1">
                                <div class="px-2 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-1 flex items-center justify-between">
                                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-400">Academic Vault</span>
                                    <span class="text-[10px] bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold px-2 py-0.5 rounded-full">500+ Files</span>
                                </div>
                                
                                <a href="resources.html?type=Notes" class="flex items-center gap-3 p-2 rounded-xl text-xs font-semibold hover:bg-sky-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition group/item">
                                    <span class="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xs shrink-0 group-hover/item:scale-105 transition-transform"><i class="fa-solid fa-book-open"></i></span>
                                    <div class="flex-grow">
                                        <div class="font-bold flex items-center justify-between">
                                            <span>Notes & Theory</span>
                                            <i class="fa-solid fa-chevron-right text-[9px] opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-sky-500"></i>
                                        </div>
                                        <div class="text-[10px] text-slate-400 font-normal">Handwritten & lecture notes</div>
                                    </div>
                                </a>

                                <a href="resources.html?type=PYQs" class="flex items-center gap-3 p-2 rounded-xl text-xs font-semibold hover:bg-purple-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition group/item">
                                    <span class="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs shrink-0 group-hover/item:scale-105 transition-transform"><i class="fa-solid fa-file-lines"></i></span>
                                    <div class="flex-grow">
                                        <div class="font-bold flex items-center justify-between">
                                            <span>PYQs (Question Papers)</span>
                                            <i class="fa-solid fa-chevron-right text-[9px] opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-purple-500"></i>
                                        </div>
                                        <div class="text-[10px] text-slate-400 font-normal">Previous year JUT exam papers</div>
                                    </div>
                                </a>

                                <a href="resources.html?type=Important+Questions" class="flex items-center gap-3 p-2 rounded-xl text-xs font-semibold hover:bg-amber-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 transition group/item">
                                    <span class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shrink-0 group-hover/item:scale-105 transition-transform"><i class="fa-solid fa-star"></i></span>
                                    <div class="flex-grow">
                                        <div class="font-bold flex items-center justify-between">
                                            <span>Important Questions</span>
                                            <i class="fa-solid fa-chevron-right text-[9px] opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-amber-500"></i>
                                        </div>
                                        <div class="text-[10px] text-slate-400 font-normal">MIQ / High-yield exam prep</div>
                                    </div>
                                </a>

                                <a href="resources.html?type=Sample+Papers" class="flex items-center gap-3 p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition group/item">
                                    <span class="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0 group-hover/item:scale-105 transition-transform"><i class="fa-solid fa-file-circle-check"></i></span>
                                    <div class="flex-grow">
                                        <div class="font-bold flex items-center justify-between">
                                            <span>Sample & Model Papers</span>
                                            <i class="fa-solid fa-chevron-right text-[9px] opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-emerald-500"></i>
                                        </div>
                                        <div class="text-[10px] text-slate-400 font-normal">Mock question practice sets</div>
                                    </div>
                                </a>

                                <a href="resources.html?type=Syllabus" class="flex items-center gap-3 p-2 rounded-xl text-xs font-semibold hover:bg-indigo-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition group/item">
                                    <span class="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs shrink-0 group-hover/item:scale-105 transition-transform"><i class="fa-solid fa-graduation-cap"></i></span>
                                    <div class="flex-grow">
                                        <div class="font-bold flex items-center justify-between">
                                            <span>Official Syllabus</span>
                                            <i class="fa-solid fa-chevron-right text-[9px] opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-indigo-500"></i>
                                        </div>
                                        <div class="text-[10px] text-slate-400 font-normal">JUT branch curricula & credits</div>
                                    </div>
                                </a>

                                <div class="pt-1.5 border-t border-slate-100 dark:border-slate-800">
                                    <a href="resources.html" class="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-950/60 dark:to-indigo-950/60 text-sky-700 dark:text-sky-300 hover:from-sky-100 hover:to-indigo-100 dark:hover:from-sky-900/80 dark:hover:to-indigo-900/80 transition">
                                        <span>Browse All Materials</span>
                                        <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Exams Link -->
                    <a href="exam-preparation.html" class="px-3.5 py-1.5 rounded-xl transition-all duration-150 flex items-center gap-1.5 ${isExamsActive ? 'text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-900 font-bold shadow-xs border border-slate-200/60 dark:border-slate-700/80' : 'hover:text-sky-600 dark:hover:text-sky-400 hover:bg-white/60 dark:hover:bg-slate-900/60'}">
                        <span>Exams</span>
                    </a>
                    
                    <!-- D2D Special Pill Link -->
                    <a href="d2d.html" class="px-3.5 py-1.5 rounded-xl transition-all duration-150 flex items-center gap-1.5 ${isD2DActive ? 'text-amber-600 dark:text-amber-400 bg-white dark:bg-slate-900 font-bold shadow-xs border border-amber-300 dark:border-amber-800' : 'text-amber-600 dark:text-amber-400 hover:bg-amber-500/10'}">
                        <i class="fa-solid fa-bolt text-amber-500 text-xs"></i>
                        <span>D2D</span>
                        <span class="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20">2026</span>
                    </a>

                    <!-- Colleges Link -->
                    <a href="colleges.html" class="px-3.5 py-1.5 rounded-xl transition-all duration-150 flex items-center gap-1.5 ${isCollegesActive ? 'text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-900 font-bold shadow-xs border border-slate-200/60 dark:border-slate-700/80' : 'hover:text-sky-600 dark:hover:text-sky-400 hover:bg-white/60 dark:hover:bg-slate-900/60'}">
                        <span>Colleges</span>
                    </a>
                    
                    <!-- Explore Dropdown (Tools, Community, Videos) -->
                    <div class="relative group">
                        <button type="button" class="px-3.5 py-1.5 rounded-xl transition-all duration-150 flex items-center gap-1.5 ${isMoreActive ? 'text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-900 font-bold shadow-xs border border-slate-200/60 dark:border-slate-700/80' : 'hover:text-sky-600 dark:hover:text-sky-400 hover:bg-white/60 dark:hover:bg-slate-900/60'}">
                            <span>Explore</span>
                            <i class="fa-solid fa-chevron-down text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200"></i>
                        </button>
                        
                        <div class="absolute right-0 top-full pt-2 w-64 dc-dropdown-panel z-50">
                            <div class="p-2.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/5 dark:ring-white/10 space-y-1">
                                <a href="tools.html" class="flex items-center gap-3 p-2 rounded-xl text-xs font-semibold hover:bg-sky-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition group/item ${currentPath === 'tools.html' ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 font-bold' : ''}">
                                    <span class="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xs shrink-0 group-hover/item:scale-105 transition-transform"><i class="fa-solid fa-calculator"></i></span>
                                    <div>
                                        <div class="font-bold">Calculators & Tools</div>
                                        <div class="text-[10px] text-slate-400 font-normal">CGPA & Attendance</div>
                                    </div>
                                </a>

                                <a href="test-series.html" class="flex items-center gap-3 p-2 rounded-xl text-xs font-semibold hover:bg-teal-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition group/item ${currentPath === 'test-series.html' ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-600 font-bold' : ''}">
                                    <span class="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xs shrink-0 group-hover/item:scale-105 transition-transform"><i class="fa-solid fa-list-check"></i></span>
                                    <div>
                                        <div class="font-bold">CBT Mock Tests</div>
                                        <div class="text-[10px] text-slate-400 font-normal">Online simulated exams</div>
                                    </div>
                                </a>

                                <a href="leaderboard.html" class="flex items-center gap-3 p-2 rounded-xl text-xs font-semibold hover:bg-amber-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 transition group/item ${currentPath === 'leaderboard.html' ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 font-bold' : ''}">
                                    <span class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shrink-0 group-hover/item:scale-105 transition-transform"><i class="fa-solid fa-trophy"></i></span>
                                    <div>
                                        <div class="font-bold">State Leaderboard</div>
                                        <div class="text-[10px] text-slate-400 font-normal">Live test rankings</div>
                                    </div>
                                </a>

                                <a href="qna.html" class="flex items-center gap-3 p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition group/item ${currentPath === 'qna.html' || currentPath === 'QnA.html' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 font-bold' : ''}">
                                    <span class="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0 group-hover/item:scale-105 transition-transform"><i class="fa-regular fa-comments"></i></span>
                                    <div>
                                        <div class="font-bold">Q&A Community</div>
                                        <div class="text-[10px] text-slate-400 font-normal">Ask & discuss doubts</div>
                                    </div>
                                </a>

                                <a href="video-lectures.html" class="flex items-center gap-3 p-2 rounded-xl text-xs font-semibold hover:bg-rose-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 transition group/item ${currentPath === 'video-lectures.html' ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 font-bold' : ''}">
                                    <span class="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs shrink-0 group-hover/item:scale-105 transition-transform"><i class="fa-brands fa-youtube"></i></span>
                                    <div>
                                        <div class="font-bold">Video Lectures</div>
                                        <div class="text-[10px] text-slate-400 font-normal">Curated branch playlists</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Right Action Controls -->
                <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    
                    <!-- Search Trigger Button -->
                    <button id="dc-nav-search-btn" title="Search (Ctrl + K)" aria-label="Search" class="h-9 sm:h-10 flex items-center justify-between gap-2.5 bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 px-3 rounded-xl text-xs font-medium transition duration-150 border border-slate-200/60 dark:border-slate-700/60 shadow-2xs group">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-magnifying-glass text-sky-600 dark:text-sky-400 text-xs sm:text-sm group-hover:scale-110 transition-transform"></i>
                            <span class="hidden md:inline text-slate-500 dark:text-slate-400 font-medium">Search...</span>
                        </div>
                        <kbd class="hidden xl:inline-flex items-center gap-0.5 text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md bg-white dark:bg-slate-900 text-slate-400 border border-slate-200 dark:border-slate-700 shadow-2xs">Ctrl K</kbd>
                    </button>

                    <!-- Theme Toggle Button -->
                    <button id="dc-theme-toggle-btn" title="Toggle Theme" aria-label="Toggle Dark/Light Theme" class="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center transition text-slate-700 dark:text-slate-200 shadow-2xs group">
                        <i class="fa-solid fa-moon dc-theme-toggle-icon group-hover:rotate-12 transition-transform duration-200"></i>
                    </button>

                    <!-- Share Button (Visible on sm+ screens) -->
                    <button id="dc-nav-share-btn" title="Share Diploma Campus" aria-label="Share page link" class="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 hover:bg-sky-50 dark:hover:bg-sky-950/70 hover:text-sky-600 dark:hover:text-sky-400 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 items-center justify-center transition shadow-2xs group">
                        <i class="fa-solid fa-share-nodes text-xs sm:text-sm group-hover:scale-110 transition-transform"></i>
                    </button>

                    <!-- Sign In Button (When Logged Out) -->
                    <a href="login.html" id="dc-nav-login-btn" class="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:scale-[1.02] active:scale-95">
                        <i class="fa-solid fa-arrow-right-to-bracket text-xs"></i>
                        <span>Sign In</span>
                    </a>

                    <!-- User Profile Dropdown (When Logged In) -->
                    <div id="dc-nav-user-dropdown" class="relative hidden">
                        <button id="dc-nav-avatar-btn" type="button" aria-expanded="false" class="flex items-center focus:outline-none ring-2 ring-sky-500/40 hover:ring-sky-500 rounded-xl transition duration-150">
                            <img id="dc-nav-avatar" src="https://ui-avatars.com/api/?name=Student&background=0284c7&color=fff" 
                                alt="Profile Avatar" 
                                class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover cursor-pointer">
                        </button>

                        <!-- User Popup Menu -->
                        <div id="dc-nav-user-menu" class="absolute right-0 top-full mt-2 w-60 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-900/20 p-2.5 hidden z-50 transform origin-top-right transition-all ring-1 ring-slate-900/5 dark:ring-white/10">
                            <div class="px-3 py-2.5 border-b border-slate-100 dark:border-slate-800 mb-1.5 bg-slate-50/70 dark:bg-slate-850/70 rounded-xl">
                                <p id="dc-nav-user-name" class="text-xs font-bold text-slate-900 dark:text-white truncate">Student User</p>
                                <p id="dc-nav-user-email" class="text-[10px] text-slate-400 truncate">student@diplomacampus.in</p>
                            </div>
                            <div class="space-y-0.5">
                                <a id="dc-nav-admin-link" href="admin.html" class="hidden flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition">
                                    <i class="fa-solid fa-shield-halved text-xs"></i> Admin Panel
                                </a>
                                <a href="login.html" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition">
                                    <i class="fa-solid fa-gauge text-xs text-sky-500"></i> Student Dashboard
                                </a>
                                <a href="resources.html" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition">
                                    <i class="fa-solid fa-bookmark text-xs text-purple-500"></i> Study Materials
                                </a>
                            </div>
                            <div class="pt-1.5 mt-1.5 border-t border-slate-100 dark:border-slate-800">
                                <button id="dc-nav-logout-btn" class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 transition text-left">
                                    <i class="fa-solid fa-arrow-right-from-bracket text-xs"></i> Sign Out
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Hamburger Menu Button -->
                    <button id="dc-mobile-menu-toggle" class="lg:hidden h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-sm transition border border-slate-200/60 dark:border-slate-700/60 shadow-2xs" aria-label="Toggle navigation menu">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </button>
                </div>
            </div>
        </header>

        <!-- Dynamic Nav Spacer that perfectly prevents content from hiding behind fixed header -->
        <div id="dc-nav-spacer" class="h-16 sm:h-[68px] w-full shrink-0 transition-all" aria-hidden="true"></div>

        <!-- Mobile Sidebar Drawer Backdrop -->
        <div id="dc-sidebar-overlay" class="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 hidden transition-opacity duration-300 opacity-0" aria-hidden="true"></div>

        <!-- Mobile Sidebar Drawer -->
        <aside id="dc-sidebar" class="fixed top-0 right-0 w-[310px] xs:w-[330px] sm:w-[360px] max-w-[88vw] h-full bg-white dark:bg-slate-900 z-50 transform translate-x-full transition-transform duration-300 ease-out shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-800" aria-label="Mobile Navigation">
            <!-- Sidebar Header -->
            <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-850/80">
                <div class="flex items-center gap-2.5">
                    <img src="assets/images/logo.png" alt="Diploma Campus" class="w-8 h-8 rounded-xl object-contain bg-white dark:bg-slate-800 p-0.5 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
                    <div>
                        <h4 class="font-heading font-black text-sm text-slate-900 dark:text-white leading-tight">Diploma Campus</h4>
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
                <button id="dc-sidebar-search-trigger" class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition border border-slate-200/50 dark:border-slate-700">
                    <span class="flex items-center gap-2"><i class="fa-solid fa-magnifying-glass text-sky-500"></i> Search notes, PYQs, colleges...</span>
                    <span class="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-400 font-mono">⌘K</span>
                </button>
            </div>

            <!-- Sidebar Navigation Links List -->
            <nav class="flex-1 overflow-y-auto p-3 space-y-1 text-xs font-medium custom-scroll">
                <a href="index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${currentPath === 'index.html' || currentPath === '' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-house w-4 text-center text-xs"></i> <span>Home</span>
                </a>
                <a href="colleges.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${isCollegesActive ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-building-columns w-4 text-center text-xs"></i> <span>Polytechnic Colleges</span>
                </a>

                <!-- Resources Group in Sidebar -->
                <div class="pt-2 pb-1">
                    <div class="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center justify-between">
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
                <div class="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center justify-between">
                    <span>Exams & Tests</span>
                    <i class="fa-solid fa-bullseye text-[9px]"></i>
                </div>
                <a href="exam-preparation.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${isExamsActive ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-award w-4 text-center text-xs text-sky-500"></i> <span>Exam Preparation</span>
                </a>
                <a href="d2d.html" class="flex items-center justify-between px-3 py-2.5 rounded-xl transition ${isD2DActive ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-bolt w-4 text-center text-xs text-amber-500"></i> <span>D2D Lateral Entry</span></span>
                    <span class="text-[9px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full">Hot</span>
                </a>
                <a href="test-series.html" class="flex items-center justify-between px-3 py-2.5 rounded-xl transition ${currentPath === 'test-series.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-list-check w-4 text-center text-xs text-teal-500"></i> <span>CBT Mock Tests</span></span>
                    <span class="text-[9px] bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-bold px-2 py-0.5 rounded-full">150 Q</span>
                </a>
                <a href="leaderboard.html" class="flex items-center justify-between px-3 py-2.5 rounded-xl transition ${currentPath === 'leaderboard.html' ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-trophy w-4 text-center text-xs text-amber-500"></i> <span>State Leaderboard</span></span>
                    <span class="text-[9px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full">Live</span>
                </a>

                <div class="pt-1 pb-1"><hr class="border-slate-100 dark:border-slate-800"></div>

                <!-- Tools & Community -->
                <div class="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center justify-between">
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
                    <span class="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1.5 px-1">Branch Portals</span>
                    <div class="grid grid-cols-3 gap-1.5 text-[11px]">
                        <a href="cse.html" class="px-2 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-700 dark:text-slate-300 transition text-center font-bold border border-slate-200/50 dark:border-slate-700">CSE</a>
                        <a href="mech.html" class="px-2 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-700 dark:text-slate-300 transition text-center font-bold border border-slate-200/50 dark:border-slate-700">Mech</a>
                        <a href="civil.html" class="px-2 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-700 dark:text-slate-300 transition text-center font-bold border border-slate-200/50 dark:border-slate-700">Civil</a>
                        <a href="ee.html" class="px-2 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-700 dark:text-slate-300 transition text-center font-bold border border-slate-200/50 dark:border-slate-700">EE</a>
                        <a href="ece.html" class="px-2 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-700 dark:text-slate-300 transition text-center font-bold border border-slate-200/50 dark:border-slate-700">ECE</a>
                        <a href="auto.html" class="px-2 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-700 dark:text-slate-300 transition text-center font-bold border border-slate-200/50 dark:border-slate-700">Auto</a>
                    </div>
                </div>

                <!-- Quick Share on Mobile -->
                <div class="pt-2 pb-1">
                    <button id="dc-sidebar-share-btn" class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 text-slate-700 dark:text-slate-300 hover:text-sky-600 text-xs font-semibold transition border border-slate-200/50 dark:border-slate-700">
                        <i class="fa-solid fa-share-nodes text-sky-500"></i>
                        <span>Share Diploma Campus</span>
                    </button>
                </div>
            </nav>

            <!-- Sidebar Auth Profile Footer -->
            <div id="dc-sidebar-auth" class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-850/80 shrink-0">
                <a href="login.html" class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold py-2.5 rounded-xl shadow-md transition text-xs">
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

    // ========================================================
    // 4. Event Listeners & Interactions
    // ========================================================
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

    // ========================================================
    // 5. Auth State Observer
    // ========================================================
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
            adminNavBtn.className = 'hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 text-xs font-bold hover:bg-rose-600 hover:text-white transition shadow-xs';
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
                    <a href="admin.html" class="w-full flex items-center justify-center gap-2 py-2 bg-rose-600 text-white hover:bg-rose-700 rounded-xl text-xs font-bold transition shadow-xs">
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
                <a href="login.html" class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold py-2.5 rounded-xl shadow-md transition text-xs">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In / Dashboard
                </a>
                `;
            }
        }
    });

    // ========================================================
    // 6. Navigation Height Spacer Synchronization
    // ========================================================
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

    // ========================================================
    // 7. PWA Manifest & Service Worker Registration
    // ========================================================
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
