// 1. Define the open and close functions GLOBALLY so they never break
window.openGroupModal = function() {
    const overlay = document.getElementById("group-modal-overlay");
    const modalContent = document.getElementById("group-modal-content");
    if (overlay && modalContent) {
        overlay.classList.remove("hidden");
        setTimeout(() => {
            overlay.classList.remove("opacity-0");
            modalContent.classList.remove("scale-95");
            modalContent.classList.add("scale-100");
        }, 10);
    }
};

window.closeGroupModal = function() {
    const overlay = document.getElementById("group-modal-overlay");
    const modalContent = document.getElementById("group-modal-content");
    if (overlay && modalContent) {
        overlay.classList.add("opacity-0");
        modalContent.classList.remove("scale-100");
        modalContent.classList.add("scale-95");
        setTimeout(() => overlay.classList.add("hidden"), 300);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("group-card-container");
    if (!container) return; // Stop if container isn't found

    // 2. Inject custom CSS for the animated borders
    if (!document.getElementById("group-btn-styles")) {
        const style = document.createElement("style");
        style.id = "group-btn-styles";
        style.innerHTML = `
            @keyframes moving-bg {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-moving-bg {
                background-size: 200% 200%;
                animation: moving-bg 3s ease infinite;
            }
            @keyframes border-radar {
                0% { box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.6); }
                70% { box-shadow: 0 0 0 15px rgba(20, 184, 166, 0); }
                100% { box-shadow: 0 0 0 0 rgba(20, 184, 166, 0); }
            }
            .animate-border-radar {
                animation: border-radar 2s infinite;
            }
            .group:hover .animate-border-radar {
                animation: none;
                box-shadow: 0 10px 30px rgba(20, 184, 166, 0.4);
            }
        `;
        document.head.appendChild(style);
    }

    // 3. Your actual group links
    const groups = [
        { name: "WhatsApp group for 2025-28 session", icon: "fa-whatsapp", url: "https://chat.whatsapp.com/Hwkx6sbrZETD427NKzZv8Q?mode=gi_t", color: "bg-[#25D366] hover:bg-[#20bd5a]" },
        { name: "WhatsApp group for 2024-27 session", icon: "fa-whatsapp", url: "https://chat.whatsapp.com/LFGSEy4uJsL4GcOL1rN2ui?mode=gi_t", color: "bg-[#25D366] hover:bg-[#20bd5a]" },
        { name: "WhatsApp channel for latest updates",  icon: "fa-whatsapp",  url: "https://whatsapp.com/channel/0029Vb7izReKAwEfwz7Ixl1q",  color: "bg-[#25D366] hover:bg-[#20bd5a]" }
    ];

    // 4. Inject Button (Using inline onclick="openGroupModal()")
    container.innerHTML = `
        <div class="flex justify-center mt-8 mb-6 relative z-10">
            <div class="relative inline-flex group cursor-pointer" onclick="openGroupModal()">
                <!-- Animated Glowing Background Border -->
                <div class="absolute -inset-1 bg-gradient-to-r from-teal-400 via-yellow-400 to-teal-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-moving-bg pointer-events-none"></div>
                
                <!-- Main Button -->
                <button type="button" class="relative bg-teal-500 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 group-hover:-translate-y-1 flex items-center gap-2.5 animate-border-radar pointer-events-none">
                    <i class="fa-brands fa-whatsapp text-xl"></i> Join Student Groups
                </button>
            </div>
        </div>
    `;

    // 5. Inject Modal (Using inline onclick="closeGroupModal()")
    if (!document.getElementById("group-modal-overlay")) {
        const modalHTML = `
            <div id="group-modal-overlay" onclick="if(event.target === this) closeGroupModal()" class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[9999] hidden flex justify-center items-center opacity-0 transition-opacity duration-300 p-4">
                <div id="group-modal-content" class="bg-white rounded-2xl w-full max-w-md relative transform scale-95 transition-transform duration-300 shadow-2xl overflow-hidden cursor-default">
                    
                    <!-- Signature Gradient Top Border -->
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-yellow-400 z-10"></div>
                    
                    <!-- Modal Header -->
                    <div class="flex justify-between items-center p-5 border-b border-gray-100 relative">
                        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <i class="fa-brands fa-whatsapp text-[#25D366] text-2xl"></i> Community
                        </h2>
                        
                        <!-- BULLETPROOF CLOSE BUTTON -->
                        <button type="button" onclick="closeGroupModal()" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 outline-none cursor-pointer z-50 shadow-sm border border-gray-100">
                            <i class="fa-solid fa-xmark text-xl pointer-events-none"></i>
                        </button>
                    </div>

                    <!-- Modal Body -->
                    <div class="p-6 flex flex-col gap-3.5">
                        <p class="text-sm text-gray-500 mb-2 text-center font-medium">Select your session or join the channel to get the latest study materials.</p>
                        ${groups.map(g => `
                            <a href="${g.url}" target="_blank" class="${g.color} text-white flex items-center p-3.5 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg group/link">
                                <div class="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mr-4 group-hover/link:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <i class="fa-brands ${g.icon} text-2xl"></i>
                                </div>
                                <span class="text-sm sm:text-base text-left leading-tight drop-shadow-sm">${g.name}</span>
                                <i class="fa-solid fa-chevron-right ml-auto opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all text-sm"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
});