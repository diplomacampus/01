// Global Responsive Navigation (assets/js/shared-nav.js)
(function() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const searchModalHTML = `
    <div id="dc-search-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[999] hidden items-start justify-center pt-20 px-4 transition-opacity duration-200 opacity-0">
        <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transform scale-95 transition-transform duration-200 modal-content">
            <div class="flex items-center px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850">
                <i class="fa-solid fa-magnifying-glass text-sky-600 dark:text-sky-400 text-lg mr-3"></i>
                <input type="text" id="dc-global-search-input" placeholder="Type to search notes, PYQs, colleges, syllabus, exams..." 
                    class="w-full bg-transparent text-slate-800 dark:text-white text-base font-medium outline-none placeholder:text-slate-400">
                <button id="dc-search-close-btn" title="Close Search" class="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-2 rounded-xl text-base ml-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div id="dc-search-results" class="max-h-[60vh] overflow-y-auto p-4 divide-y divide-slate-100 dark:divide-slate-800">
                <div class="text-center py-8 text-slate-400">
                    <i class="fa-solid fa-compass text-3xl mb-2 text-sky-500/40"></i>
                    <p class="text-sm font-medium">Type to search anything across Diploma Campus</p>
                    <div class="flex flex-wrap justify-center gap-2 mt-4">
                        <span class="cursor-pointer search-tag text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition" data-query="GP Ranchi">GP Ranchi</span>
                        <span class="cursor-pointer search-tag text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition" data-query="Mathematics">Mathematics</span>
                        <span class="cursor-pointer search-tag text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition" data-query="D2D">D2D Lateral Entry</span>
                        <span class="cursor-pointer search-tag text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition" data-query="Mock Test">Mock Tests</span>
                        <span class="cursor-pointer search-tag text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 transition" data-query="College Predictor">College Predictor</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    const headerContainer = document.getElementById('dc-header-mount') || document.getElementById('dc-global-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
        <header id="dc-main-header" class="fixed top-0 left-0 w-full z-40 glass-header border-b border-slate-200/80 dark:border-slate-800 transition-all duration-300 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 lg:gap-4">
                
                <!-- Brand Logo -->
                <a href="index.html" class="flex items-center gap-2.5 shrink-0 group">
                    <img src="assets/images/logo.png" alt="Diploma Campus Logo" class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-contain bg-white dark:bg-slate-800 p-0.5 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300 border border-slate-200/60 dark:border-slate-700/60">
                    <div class="flex flex-col">
                        <span class="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white leading-tight">
                            DIPLOMA <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">CAMPUS</span>
                        </span>
                        <span class="text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Jharkhand Polytechnic</span>
                    </div>
                </a>

                <!-- Desktop Navigation Links -->
                <nav class="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs xl:text-[13px] font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">
                    <a href="index.html" class="px-2.5 py-1.5 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition ${currentPath === 'index.html' || currentPath === '' ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900' : ''}">Home</a>
                    <a href="colleges.html" class="px-2.5 py-1.5 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition ${currentPath === 'colleges.html' || currentPath === 'college-detail.html' ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900' : ''}">Colleges</a>
                    
                    <!-- Resources Interactive Dropdown -->
                    <div class="relative group">
                        <a href="resources.html" class="px-2.5 py-1.5 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition flex items-center gap-1.5 ${currentPath === 'resources.html' || currentPath === 'question-papers.html' ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900' : ''}">
                            <span>Resources</span>
                            <i class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform duration-200"></i>
                        </a>
                        <div class="absolute left-0 top-full pt-1.5 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div class="p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/10 divide-y divide-slate-100 dark:divide-slate-800">
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
                                            <div class="text-[10px] text-slate-400 font-normal">Previous year papers</div>
                                        </div>
                                    </a>
                                    <a href="resources.html?type=Important+Questions" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-amber-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition">
                                        <span class="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-star"></i></span>
                                        <div>
                                            <div class="font-bold">Important Questions</div>
                                            <div class="text-[10px] text-slate-400 font-normal">MIQ / VVI questions</div>
                                        </div>
                                    </a>
                                    <a href="resources.html?type=Sample+Papers" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                                        <span class="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-file-circle-check"></i></span>
                                        <div>
                                            <div class="font-bold">Sample Papers</div>
                                            <div class="text-[10px] text-slate-400 font-normal">Model test papers</div>
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

                    <a href="exam-preparation.html" class="px-2.5 py-1.5 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition ${currentPath === 'exam-preparation.html' || currentPath === 'exam-detail.html' ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900' : ''}">Exams</a>
                    <a href="d2d.html" class="px-2.5 py-1.5 rounded-lg hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/70 dark:hover:bg-slate-800 transition ${currentPath === 'd2d.html' ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/70 font-bold border border-amber-200 dark:border-amber-900' : ''}">
                        <span class="relative">D2D <span class="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping ml-0.5"></span></span>
                    </a>
                    <a href="test-series.html" class="px-2.5 py-1.5 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition ${currentPath === 'test-series.html' ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900' : ''}">Mock Tests</a>
                    <a href="tools.html" class="px-2.5 py-1.5 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition ${currentPath === 'tools.html' ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900' : ''}">Tools</a>
                    <a href="qna.html" class="px-2.5 py-1.5 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800 transition ${currentPath === 'qna.html' || currentPath === 'QnA.html' ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 font-bold border border-sky-100 dark:border-sky-900' : ''}">Community</a>
                </nav>

                <!-- Action Controls -->
                <div class="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                    <button id="dc-nav-search-btn" class="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition shadow-xs">
                        <i class="fa-solid fa-magnifying-glass text-sky-600 dark:text-sky-400"></i>
                        <span class="hidden md:inline">Search...</span>
                    </button>

                    <button id="dc-nav-share-btn" title="Share Diploma Campus" class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 flex items-center justify-center transition">
                        <i class="fa-solid fa-share-nodes text-xs sm:text-sm"></i>
                    </button>

                    <a href="login.html" id="dc-nav-login-btn" class="inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-md shadow-sky-500/20 transition-all hover:shadow-lg">
                        <i class="fa-solid fa-arrow-right-to-bracket text-xs"></i>
                        <span>Sign In</span>
                    </a>

                    <div id="dc-nav-user-dropdown" class="relative hidden">
                        <img id="dc-nav-avatar" src="https://ui-avatars.com/api/?name=Student&background=0284c7&color=fff" 
                            alt="Profile" 
                            class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border-2 border-sky-500 object-cover cursor-pointer hover:ring-2 hover:ring-sky-400 transition">
                    </div>

                    <button id="dc-mobile-menu-toggle" class="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-base sm:text-lg transition" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </button>
                </div>
            </div>
        </header>

        <!-- Dynamic Nav Spacer that perfectly prevents content from hiding behind fixed header -->
        <div id="dc-nav-spacer" class="h-16 sm:h-20 w-full shrink-0 transition-all" aria-hidden="true"></div>

        <div id="dc-sidebar-overlay" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden transition-opacity duration-300 opacity-0"></div>
        <aside id="dc-sidebar" class="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white dark:bg-slate-900 z-50 transform translate-x-full transition-transform duration-300 ease-out shadow-2xl flex flex-col">
            <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-850">
                <div class="flex items-center gap-2.5">
                    <img src="assets/images/logo.png" alt="Diploma Campus" class="w-9 h-9 rounded-xl object-contain bg-white dark:bg-slate-800 p-0.5 shadow-md border border-slate-200/80 dark:border-slate-700/80">
                    <div>
                        <h4 class="font-extrabold text-base text-slate-900 dark:text-white leading-tight">Diploma Campus</h4>
                        <p class="text-[10px] text-sky-600 dark:text-sky-400 font-semibold tracking-wide uppercase">Jharkhand Student Hub</p>
                    </div>
                </div>
                <button id="dc-sidebar-close" class="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition">
                    <i class="fa-solid fa-xmark text-base"></i>
                </button>
            </div>

            <nav class="flex-1 overflow-y-auto p-4 space-y-1 text-sm font-medium">
                <a href="index.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${currentPath === 'index.html' || currentPath === '' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-house w-5 text-center"></i> Home
                </a>
                <a href="colleges.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${currentPath === 'colleges.html' || currentPath === 'college-detail.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-building-columns w-5 text-center"></i> Polytechnic Colleges
                </a>

                <!-- Resources Group in Sidebar -->
                <div class="pt-2 pb-1">
                    <div class="px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Resources & Study Material</div>
                    <div class="mt-1 space-y-0.5">
                        <a href="resources.html" class="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold ${currentPath === 'resources.html' && !window.location.search ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'} transition">
                            <i class="fa-solid fa-layer-group w-5 text-center text-slate-400"></i> All Resources
                        </a>
                        <a href="resources.html?type=Notes" class="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 transition">
                            <i class="fa-solid fa-book-open w-5 text-center text-sky-500"></i> Notes (Handwritten & Theory)
                        </a>
                        <a href="resources.html?type=PYQs" class="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-purple-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-600 transition">
                            <i class="fa-solid fa-file-lines w-5 text-center text-purple-500"></i> PYQs (Question Papers)
                        </a>
                        <a href="resources.html?type=Important+Questions" class="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-amber-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 transition">
                            <i class="fa-solid fa-star w-5 text-center text-amber-500"></i> Important Questions (MIQ)
                        </a>
                        <a href="resources.html?type=Sample+Papers" class="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition">
                            <i class="fa-solid fa-file-circle-check w-5 text-center text-emerald-500"></i> Sample Papers
                        </a>
                        <a href="resources.html?type=Syllabus" class="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition">
                            <i class="fa-solid fa-graduation-cap w-5 text-center text-indigo-500"></i> Official Syllabus
                        </a>
                    </div>
                </div>

                <div class="pt-1 pb-1"><hr class="border-slate-100 dark:border-slate-800"></div>

                <a href="exam-preparation.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${currentPath === 'exam-preparation.html' || currentPath === 'exam-detail.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-bullseye w-5 text-center"></i> Exam Preparation
                </a>
                <a href="d2d.html" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl transition ${currentPath === 'd2d.html' ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-award w-5 text-center"></i> D2D Portal</span>
                    <span class="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full">Hot</span>
                </a>
                <a href="test-series.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${currentPath === 'test-series.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-list-check w-5 text-center"></i> Mock Test Series
                </a>
                <a href="leaderboard.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${currentPath === 'leaderboard.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-ranking-star w-5 text-center"></i> Leaderboard
                </a>
                <a href="tools.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${currentPath === 'tools.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-solid fa-calculator w-5 text-center"></i> Predictors & Tools
                </a>
                <a href="qna.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${currentPath === 'qna.html' || currentPath === 'QnA.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-regular fa-comments w-5 text-center"></i> Q&A Community
                </a>
                <a href="video-lectures.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${currentPath === 'video-lectures.html' ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}">
                    <i class="fa-brands fa-youtube w-5 text-center"></i> Video Tutorials
                </a>

                <div class="pt-2 pb-1"><hr class="border-slate-100 dark:border-slate-800"></div>

                <div class="px-2 py-1">
                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 px-1">Branch Hubs</span>
                    <div class="grid grid-cols-2 gap-1.5 text-xs">
                        <a href="cse.html" class="px-2.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition">CSE</a>
                        <a href="mech.html" class="px-2.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition">Mechanical</a>
                        <a href="civil.html" class="px-2.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition">Civil</a>
                        <a href="ee.html" class="px-2.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition">Electrical</a>
                        <a href="ece.html" class="px-2.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition">ECE</a>
                        <a href="auto.html" class="px-2.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 text-slate-600 dark:text-slate-300 transition">Automobile</a>
                    </div>
                </div>
            </nav>

            <div id="dc-sidebar-auth" class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850">
                <a href="login.html" class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl shadow-md transition">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In / Dashboard
                </a>
            </div>
        </aside>
        `;
    }

    document.body.insertAdjacentHTML('beforeend', searchModalHTML);

    const menuToggle = document.getElementById('dc-mobile-menu-toggle');
    const sidebar = document.getElementById('dc-sidebar');
    const overlay = document.getElementById('dc-sidebar-overlay');
    const sidebarClose = document.getElementById('dc-sidebar-close');

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

    const shareBtn = document.getElementById('dc-nav-share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const data = {
                title: 'Diploma Campus - Study Materials, PYQs, Colleges & D2D',
                text: 'Access free Jharkhand Polytechnic notes, syllabus, question papers, and mock tests!',
                url: window.location.href
            };
            if (navigator.share) {
                navigator.share(data).catch(() => {});
            } else {
                navigator.clipboard?.writeText(window.location.href).then(() => {
                    if (window.showToast) window.showToast('🔗 Link copied to clipboard!');
                });
            }
        });
    }

    window.addEventListener('dc-auth-change', (e) => {
        const { user, isAdmin } = e.detail;
        const loginBtn = document.getElementById('dc-nav-login-btn');
        const userDropdown = document.getElementById('dc-nav-user-dropdown');
        const userAvatar = document.getElementById('dc-nav-avatar');
        const sidebarAuth = document.getElementById('dc-sidebar-auth');

        // Check or create admin nav button
        let adminNavBtn = document.getElementById('dc-nav-admin-btn');
        if (!adminNavBtn && loginBtn && loginBtn.parentNode) {
            adminNavBtn = document.createElement('a');
            adminNavBtn.id = 'dc-nav-admin-btn';
            adminNavBtn.href = 'admin.html';
            adminNavBtn.className = 'hidden items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 text-xs font-bold hover:bg-rose-600 hover:text-white transition shadow-sm';
            adminNavBtn.innerHTML = '<i class="fa-solid fa-shield-halved"></i> <span>Admin</span>';
            loginBtn.parentNode.insertBefore(adminNavBtn, loginBtn);
        }

        if (isAdmin) {
            if (adminNavBtn) adminNavBtn.classList.remove('hidden');
            if (adminNavBtn) adminNavBtn.classList.add('inline-flex');
        } else {
            if (adminNavBtn) adminNavBtn.classList.add('hidden');
            if (adminNavBtn) adminNavBtn.classList.remove('inline-flex');
        }

        if (user) {
            if (loginBtn) loginBtn.classList.add('hidden');
            if (userDropdown) {
                userDropdown.classList.remove('hidden');
                if (userAvatar) {
                    const photo = user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || 'User')}&background=0284c7&color=fff`;
                    userAvatar.src = photo;
                    userAvatar.title = isAdmin ? "Administrator - Click for Profile/Admin" : "Student Profile";
                    userAvatar.onclick = () => window.location.href = isAdmin ? 'admin.html' : 'login.html';
                }
            }
            if (sidebarAuth) {
                const displayName = user.displayName || user.email?.split('@')[0] || (isAdmin ? 'Admin' : 'Student');
                const photo = user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0284c7&color=fff`;
                sidebarAuth.innerHTML = `
                <div class="flex items-center gap-3 mb-3">
                    <img src="${photo}" class="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 object-cover bg-white" alt="User">
                    <div class="overflow-hidden">
                        <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${displayName} ${isAdmin ? '🛡️' : ''}</p>
                        <p class="text-xs text-slate-400 truncate">${user.email || 'Admin'}</p>
                    </div>
                </div>
                ${isAdmin ? `
                <div class="mb-2">
                    <a href="admin.html" class="w-full flex items-center justify-center gap-2 py-2 bg-rose-600 text-white hover:bg-rose-700 rounded-lg text-xs font-bold transition shadow-sm">
                        <i class="fa-solid fa-shield-halved"></i> Admin Control Center
                    </a>
                </div>
                ` : ''}
                <div class="grid grid-cols-2 gap-2">
                    <a href="login.html" class="text-center py-2 bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 hover:bg-sky-100 rounded-lg text-xs font-bold transition">Dashboard</a>
                    <button id="dc-sidebar-logout" class="py-2 bg-red-50 dark:bg-red-950/50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-bold transition">Sign Out</button>
                </div>
                `;
                document.getElementById('dc-sidebar-logout')?.addEventListener('click', () => {
                    if (window.DC_AUTH) window.DC_AUTH.logout();
                });
            }
        } else {
            if (loginBtn) loginBtn.classList.remove('hidden');
            if (userDropdown) userDropdown.classList.add('hidden');
            if (sidebarAuth) {
                sidebarAuth.innerHTML = `
                <a href="login.html" class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl shadow-md transition">
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

