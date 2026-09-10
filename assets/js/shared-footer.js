// Global Footer (assets/js/shared-footer.js)
(function() {
    const footerMount = document.getElementById('dc-footer-mount') || document.getElementById('dc-global-footer');
    if (!footerMount) return;

    footerMount.innerHTML = `
    <footer class="bg-slate-900 text-slate-400 border-t border-slate-800 mt-auto pt-16 pb-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
                
                <div class="lg:col-span-2 space-y-4">
                    <div class="flex items-center gap-2.5">
                        <img src="assets/images/logo.png" alt="Diploma Campus Logo" class="w-10 h-10 rounded-xl object-contain bg-white p-0.5 shadow-md">
                        <span class="font-extrabold text-xl tracking-tight text-white">
                            DIPLOMA <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">CAMPUS</span>
                        </span>
                    </div>
                    <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
                        Jharkhand's most comprehensive digital educational platform for Diploma, Polytechnic, JUT Semester exams, and D2D (Diploma to Degree) lateral entry preparation.
                    </p>
                    <div class="flex items-center gap-3 pt-2">
                        <a href="https://chat.whatsapp.com/BB67PLuAj3vIZs4jbF0SKc?mode=gi_t" target="_blank" rel="noopener" class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#25D366] hover:text-white text-slate-400 flex items-center justify-center transition shadow-sm" title="WhatsApp Group">
                            <i class="fa-brands fa-whatsapp text-lg"></i>
                        </a>
                        <a href="https://t.me/diplomacampus" target="_blank" rel="noopener" class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#0088cc] hover:text-white text-slate-400 flex items-center justify-center transition shadow-sm" title="Telegram Channel">
                            <i class="fa-brands fa-telegram text-lg"></i>
                        </a>
                        <a href="https://whatsapp.com/channel/0029Vb7izReKAwEfwz7Ixl1q" target="_blank" rel="noopener" class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-400 flex items-center justify-center transition shadow-sm" title="WhatsApp Channel">
                            <i class="fa-solid fa-bullhorn text-sm"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 class="font-bold text-white text-sm uppercase tracking-wider mb-4">Navigation</h4>
                    <ul class="space-y-2.5 text-sm">
                        <li><a href="index.html" class="hover:text-sky-400 transition">Home</a></li>
                        <li><a href="colleges.html" class="hover:text-sky-400 transition">Polytechnic Colleges</a></li>
                        <li><a href="resources.html" class="hover:text-sky-400 transition">Study Notes & PDFs</a></li>
                        <li><a href="question-papers.html" class="hover:text-sky-400 transition">Previous Question Papers</a></li>
                        <li><a href="exam-preparation.html" class="hover:text-sky-400 transition">Exam Hub</a></li>
                        <li><a href="d2d.html" class="hover:text-sky-400 transition">D2D Lateral Entry</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-white text-sm uppercase tracking-wider mb-4">Tools & Hubs</h4>
                    <ul class="space-y-2.5 text-sm">
                        <li><a href="test-series.html" class="hover:text-sky-400 transition">Mock Test Series</a></li>
                        <li><a href="tools.html" class="hover:text-sky-400 transition">College Predictor</a></li>
                        <li><a href="tools.html#cgpa" class="hover:text-sky-400 transition">JUT CGPA Converter</a></li>
                        <li><a href="leaderboard.html" class="hover:text-sky-400 transition">Test Leaderboard</a></li>
                        <li><a href="qna.html" class="hover:text-sky-400 transition">Q&A Student Community</a></li>
                        <li><a href="video-lectures.html" class="hover:text-sky-400 transition">Video Tutorials</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-white text-sm uppercase tracking-wider mb-4">Information & Legal</h4>
                    <ul class="space-y-2.5 text-sm">
                        <li><a href="about-us.html" class="hover:text-sky-400 transition">About Us</a></li>
                        <li><a href="contact-us.html" class="hover:text-sky-400 transition">Contact Support</a></li>
                        <li><a href="privacy.html" class="hover:text-sky-400 transition">Privacy Policy</a></li>
                        <li><a href="terms.html" class="hover:text-sky-400 transition">Terms of Service</a></li>
                        <li><a href="disclaimer.html" class="hover:text-sky-400 transition">Disclaimer Notice</a></li>
                    </ul>
                </div>

            </div>

            <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <p>© 2026 Diploma Campus. All rights reserved. Crafted for Jharkhand Polytechnic & D2D students.</p>
                <p class="flex items-center gap-1.5">
                    Made with <i class="fa-solid fa-heart text-red-500 animate-pulse"></i> by <strong>Diploma Campus Team</strong>
                </p>
            </div>
        </div>
    </footer>
    `;
})();
