// Global Search Modal Engine (assets/js/global-search.js)
(function() {
    const modal = document.getElementById('dc-search-modal');
    const searchInput = document.getElementById('dc-global-search-input');
    const searchResults = document.getElementById('dc-search-results');
    const searchCloseBtn = document.getElementById('dc-search-close-btn');
    const navSearchBtn = document.getElementById('dc-nav-search-btn');

    if (!modal || !searchInput || !searchResults) return;

    function openSearch() {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.querySelector('.modal-content')?.classList.remove('scale-95');
            modal.querySelector('.modal-content')?.classList.add('scale-100');
            searchInput.focus();
        }, 10);
    }

    function closeSearch() {
        modal.classList.add('opacity-0');
        modal.querySelector('.modal-content')?.classList.remove('scale-100');
        modal.querySelector('.modal-content')?.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            searchInput.value = '';
            renderEmptyState();
        }, 200);
    }

    // Default Trending / Quick Suggestions
    const trendingQueries = [
        { label: "Handwritten Notes", query: "Notes" },
        { label: "JUT PYQs (Papers)", query: "PYQs" },
        { label: "Important Questions", query: "Important Questions" },
        { label: "Sample Papers", query: "Sample Papers" },
        { label: "Official Syllabus", query: "Syllabus" },
        { label: "GP Ranchi", query: "GP Ranchi" },
        { label: "D2D Lateral Entry", query: "D2D" },
        { label: "CBT Mock Tests", query: "Mock Test" },
        { label: "College Predictor", query: "Predictor" },
        { label: "Engineering Physics", query: "Physics" },
        { label: "Mathematics", query: "Mathematics" }
    ];

    function renderEmptyState() {
        searchResults.innerHTML = `
        <div class="py-6 px-2 space-y-6">
            <div class="text-center">
                <div class="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl mx-auto mb-2 border border-sky-100 dark:border-sky-900 shadow-sm">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <h4 class="text-sm font-heading font-bold text-slate-800 dark:text-slate-200">Search Across All Jharkhand Diploma Materials</h4>
                <p class="text-xs text-slate-400 mt-0.5">Start typing to see instant live results & suggestions</p>
            </div>

            <div>
                <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 px-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-fire text-amber-500"></i>
                    <span>Popular & Suggested Topics</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                    ${trendingQueries.map(t => `
                        <button type="button" class="search-tag px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 text-xs font-semibold transition flex items-center gap-1.5 border border-slate-200/60 dark:border-slate-700" data-query="${t.query}">
                            <span>${t.label}</span>
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Quick Category Gateways -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <a href="resources.html?type=Notes" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 hover:bg-sky-50 dark:hover:bg-sky-950/50 transition border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 group">
                    <span class="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-book-open"></i></span>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-sky-600">Notes</span>
                </a>
                <a href="resources.html?type=PYQs" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 group">
                    <span class="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-file-lines"></i></span>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-purple-600">PYQs</span>
                </a>
                <a href="resources.html?type=Important+Questions" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 hover:bg-amber-50 dark:hover:bg-amber-950/50 transition border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 group">
                    <span class="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-star"></i></span>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-600">Important Qs</span>
                </a>
                <a href="resources.html?type=Sample+Papers" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 group">
                    <span class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-file-circle-check"></i></span>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-emerald-600">Sample Papers</span>
                </a>
                <a href="resources.html?type=Syllabus" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 group">
                    <span class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-graduation-cap"></i></span>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600">Syllabus</span>
                </a>
                <a href="test-series.html" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 hover:bg-teal-50 dark:hover:bg-teal-950/50 transition border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 group">
                    <span class="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-list-check"></i></span>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-teal-600">Mock Tests</span>
                </a>
            </div>
        </div>
        `;
        bindTags();
    }

    function bindTags() {
        document.querySelectorAll('.search-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                searchInput.value = tag.getAttribute('data-query') || '';
                performSearch();
            });
        });
    }

    // Helper to highlight matching text
    function highlightMatch(text, query) {
        if (!text || !query) return text || '';
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return String(text).replace(regex, '<span class="text-sky-600 dark:text-sky-400 font-extrabold underline decoration-sky-400/40">$1</span>');
    }

    function performSearch() {
        const query = (searchInput.value || '').trim().toLowerCase();
        if (!query) {
            renderEmptyState();
            return;
        }

        const data = window.DC_DATA || {};
        
        // 1. Resources & Study Materials (Notes, PYQs, Important Questions, Sample Papers, Syllabus)
        const studyMaterials = (window.DC_DATA_MANAGER ? window.DC_DATA_MANAGER.getAll('resources') : null) || data.studyMaterials || data.resources || [];
        const colleges = data.colleges || [];
        const branches = data.branches || [];
        const exams = data.exams || [];
        const mockTests = data.mockTests || [];
        const tools = [
            { id: 'college-predictor', title: 'Jharkhand Polytechnic College Predictor', type: 'Tool', desc: 'Predict polytechnic college by PECE rank or marks', link: 'tools.html#predictor', icon: 'fa-wand-magic-sparkles' },
            { id: 'cgpa-converter', title: 'JUT CGPA to Percentage Calculator', type: 'Tool', desc: 'Calculate official percentage from semester CGPA', link: 'tools.html#cgpa', icon: 'fa-calculator' },
            { id: 'leaderboard', title: 'State Test Leaderboard & Rankings', type: 'Leaderboard', desc: 'View top scorers and live ranks across mock tests', link: 'leaderboard.html', icon: 'fa-trophy' },
            { id: 'community', title: 'Student Q&A Community Forum', type: 'Community', desc: 'Ask questions, request notes, and discuss exams', link: 'qna.html', icon: 'fa-comments' }
        ];

        const results = [];
        const liveSuggestions = new Set();

        // Search in Study Materials / Resources
        studyMaterials.forEach(sm => {
            const title = sm.title || '';
            const subject = sm.subject || '';
            const type = sm.type || 'Notes';
            const branch = sm.branch || '';
            const sem = sm.semester ? `Sem ${sm.semester}` : '';

            if (title.toLowerCase().includes(query) || subject.toLowerCase().includes(query) || type.toLowerCase().includes(query) || branch.toLowerCase().includes(query)) {
                
                let badgeStyle = 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800';
                let icon = 'fa-book-open';
                
                if (type.toLowerCase().includes('pyq')) {
                    badgeStyle = 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
                    icon = 'fa-file-lines';
                } else if (type.toLowerCase().includes('important')) {
                    badgeStyle = 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800';
                    icon = 'fa-star';
                } else if (type.toLowerCase().includes('sample')) {
                    badgeStyle = 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
                    icon = 'fa-file-circle-check';
                } else if (type.toLowerCase().includes('syllabus')) {
                    badgeStyle = 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
                    icon = 'fa-graduation-cap';
                }

                results.push({
                    type: type,
                    icon: icon,
                    badgeColor: badgeStyle,
                    title: title,
                    subtitle: `${branch} • ${sem} • ${subject}`,
                    link: sm.url || sm.downloadUrl || `resources.html?type=${encodeURIComponent(type)}`
                });

                if (subject && subject.toLowerCase().includes(query)) liveSuggestions.add(subject);
            }
        });

        // Search Colleges
        colleges.forEach(c => {
            if ((c.name || '').toLowerCase().includes(query) || (c.district || '').toLowerCase().includes(query) || (c.shortName || '').toLowerCase().includes(query)) {
                results.push({
                    type: 'College',
                    icon: 'fa-building-columns',
                    badgeColor: 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
                    title: c.name,
                    subtitle: `${c.district} • ${c.type} • Intake: ${c.totalIntake || '300+'}`,
                    link: `college-detail.html?id=${c.id}`
                });
                liveSuggestions.add(c.name);
            }
        });

        // Search Branches
        branches.forEach(b => {
            if ((b.name || '').toLowerCase().includes(query) || (b.short || '').toLowerCase().includes(query) || (b.desc || '').toLowerCase().includes(query)) {
                results.push({
                    type: 'Branch Hub',
                    icon: 'fa-code-branch',
                    badgeColor: 'bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
                    title: `${b.name} (${b.short})`,
                    subtitle: b.desc,
                    link: `${b.id}.html`
                });
                liveSuggestions.add(b.name);
            }
        });

        // Search Exams
        exams.forEach(e => {
            if ((e.title || '').toLowerCase().includes(query) || (e.overview || '').toLowerCase().includes(query)) {
                results.push({
                    type: 'Exam Portal',
                    icon: 'fa-bullseye',
                    badgeColor: 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
                    title: e.title,
                    subtitle: `${e.conductingBody || 'JCECEB'} • ${e.badge || 'State Exam'}`,
                    link: `exam-detail.html?id=${e.id}`
                });
                liveSuggestions.add(e.title);
            }
        });

        // Search Mock Tests
        mockTests.forEach(m => {
            if ((m.title || '').toLowerCase().includes(query) || (m.category || '').toLowerCase().includes(query)) {
                results.push({
                    type: 'CBT Mock Test',
                    icon: 'fa-list-check',
                    badgeColor: 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
                    title: m.title,
                    subtitle: `${m.category} • ${m.timeLimit || 60} Mins • ${m.totalMarks || 100} Marks`,
                    link: 'test-series.html'
                });
                liveSuggestions.add(m.title);
            }
        });

        // Search Tools
        tools.forEach(t => {
            if (t.title.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query)) {
                results.push({
                    type: t.type,
                    icon: t.icon,
                    badgeColor: 'bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800',
                    title: t.title,
                    subtitle: t.desc,
                    link: t.link
                });
            }
        });

        // Build HTML for Live Suggestions & Matched Results
        const suggestionPills = Array.from(liveSuggestions).slice(0, 5);

        if (results.length === 0) {
            searchResults.innerHTML = `
            <div class="text-center py-10 px-4 text-slate-400">
                <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center text-2xl mx-auto mb-3">
                    <i class="fa-regular fa-folder-open"></i>
                </div>
                <p class="text-sm font-bold text-slate-700 dark:text-slate-300">No matching study materials found for "${query}"</p>
                <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">Try typing "Physics", "Civil", "PYQ", "Syllabus", or "GP Ranchi".</p>
                <div class="mt-4 flex flex-wrap justify-center gap-2">
                    <button type="button" class="search-tag text-xs font-semibold px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400" data-query="Notes">Browse Notes</button>
                    <button type="button" class="search-tag text-xs font-semibold px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400" data-query="PYQs">Browse PYQs</button>
                    <button type="button" class="search-tag text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400" data-query="Syllabus">Browse Syllabus</button>
                </div>
            </div>
            `;
            bindTags();
            return;
        }

        let suggestionsBar = '';
        if (suggestionPills.length > 0) {
            suggestionsBar = `
            <div class="pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                <div class="text-[11px] font-bold text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-bolt text-amber-500 text-xs"></i>
                    <span>Live Suggestions:</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                    ${suggestionPills.map(s => `
                        <button type="button" class="search-tag px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 text-sky-700 dark:text-sky-300 text-xs font-semibold transition border border-sky-200/50 dark:border-sky-900" data-query="${s}">
                            <span>${s}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            `;
        }

        const countHeader = `
        <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pb-2 mb-2">
            <span>Found <strong class="text-sky-600 dark:text-sky-400">${results.length}</strong> matching results</span>
            <span class="text-[11px]">Instant Search</span>
        </div>
        `;

        const resultsList = results.slice(0, 25).map(item => `
        <a href="${item.link}" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition group border border-transparent hover:border-slate-200/80 dark:hover:border-slate-700">
            <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center text-sm shrink-0 transition shadow-xs">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor} uppercase tracking-wider">${item.type}</span>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">${highlightMatch(item.title, query)}</h5>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">${highlightMatch(item.subtitle, query)}</p>
            </div>
            <i class="fa-solid fa-arrow-right text-xs text-slate-300 dark:text-slate-600 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all"></i>
        </a>
        `).join('');

        searchResults.innerHTML = `
        <div class="space-y-1">
            ${suggestionsBar}
            ${countHeader}
            <div class="space-y-1.5">
                ${resultsList}
            </div>
        </div>
        `;

        bindTags();
    }

    // Real-time instant search as user types
    searchInput.addEventListener('input', performSearch);
    if (navSearchBtn) navSearchBtn.addEventListener('click', openSearch);
    if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSearch();
    });

    bindTags();
})();
