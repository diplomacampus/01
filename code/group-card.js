document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("group-card-container");
    if (!container) return; // Stop if container isn't found

    // 1. Put your actual group links here
    const groups = [
        { name: "WhatsApp group for 2025-28 session students", icon: "fa-whatsapp", url: "https://chat.whatsapp.com/BB67PLuAj3vIZs4jbF0SKc?mode=gi_t", color: "bg-[#25D366] hover:bg-[#20bd5a]" },
        { name: "WhatsApp group for 2024-27 session students", icon: "fa-whatsapp", url: "https://chat.whatsapp.com/LFGSEy4uJsL4GcOL1rN2ui?mode=gi_t", color: "bg-[#25D366] hover:bg-[#20bd5a]" },
        { name: "WhatsApp channel for latest updates",  icon: "fa-whatsapp",  url: "https://whatsapp.com/channel/0029Vb7izReKAwEfwz7Ixl1q",  color: "bg-[#25D366] hover:bg-[#20bd5a]" }
    ];

    // 2. Inject the Card into your page
    container.innerHTML = `
        <div class="max-w-xs mx-auto bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Our Community</h2>
            <p class="text-gray-500 mb-5 text-sm">Connect, share ideas, and stay updated!</p>
            <button id="join-groups-btn" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition duration-200">
                Join our groups
            </button>
        </div>
    `;

    // 3. Auto-generate and Inject the Modal into the body
    const modalHTML = `
        <div id="group-modal-overlay" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden flex justify-center items-center opacity-0 transition-opacity duration-300">
            <div id="group-modal-content" class="bg-white rounded-2xl w-11/12 max-w-sm p-6 relative transform scale-95 transition-transform duration-300 shadow-2xl">
                <button id="close-modal-btn" class="absolute top-3 right-4 text-gray-400 hover:text-gray-800 text-3xl">&times;</button>
                <h3 class="text-xl font-bold text-center text-gray-800 mb-5">Select a Platform</h3>
                <div class="flex flex-col gap-3">
                    ${groups.map(g => `
                        <a href="${g.url}" target="_blank" class="${g.color} text-white flex items-center p-3.5 rounded-xl font-medium transition duration-200 hover:scale-[1.02]">
                            <i class="fa-brands ${g.icon} text-2xl mr-3 w-8 text-center"></i> Join ${g.name}
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // 4. Setup functionality and animations
    const btn = document.getElementById("join-groups-btn");
    const overlay = document.getElementById("group-modal-overlay");
    const modalContent = document.getElementById("group-modal-content");
    const closeBtn = document.getElementById("close-modal-btn");

    // Open Modal
    btn.addEventListener("click", () => {
        overlay.classList.remove("hidden");
        setTimeout(() => {
            overlay.classList.remove("opacity-0");
            modalContent.classList.remove("scale-95");
            modalContent.classList.add("scale-100");
        }, 10); 
    });

    // Close Modal Function
    const closeModal = () => {
        overlay.classList.add("opacity-0");
        modalContent.classList.remove("scale-100");
        modalContent.classList.add("scale-95");
        setTimeout(() => overlay.classList.add("hidden"), 300);
    };

    // Trigger Close
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
    });
});