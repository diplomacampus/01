<!-- Add Tailwind CDN (for quick use) -->
<script src="https://cdn.tailwindcss.com"></script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  #notify-card {
    font-family: 'Inter', system-ui, sans-serif;
  }
</style>

<script>
(function() {
  // Prevent showing multiple times in the same tab
  if (sessionStorage.getItem("notifyShown")) return;
  sessionStorage.setItem("notifyShown", "true");

  // Create notification card
  const card = document.createElement("div");
  card.id = "notify-card";
  card.className = `
    fixed bottom-6 right-6 w-80 bg-zinc-900 text-white 
    rounded-3xl shadow-2xl border border-zinc-700
    transform translate-y-24 opacity-0 transition-all duration-500 ease-out
    z-[9999]
  `;

  card.innerHTML = `
    <div class="p-6">
      <!-- Close Button -->
      <button id="close-btn" 
        class="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors text-xl leading-none">
        ✕
      </button>

      <div class="text-center mb-5">
        <h3 class="text-lg font-semibold tracking-tight">Stay Updated</h3>
        <p class="text-zinc-400 text-sm mt-1">
          Join our channels for instant updates, notices & important alerts
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <!-- WhatsApp Button -->
        <a href="https://whatsapp.com/channel/0029Vb7izReKAwEfwz7Ixl1q" 
           target="_blank"
           class="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] 
                  text-white font-medium py-3.5 px-6 rounded-2xl transition-all active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.92-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
          <span>Join WhatsApp Channel</span>
        </a>

        <!-- Telegram Button -->
        <a href="https://t.me/diplomacampus" 
           target="_blank"
           class="flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0077b3] 
                  text-white font-medium py-3.5 px-6 rounded-2xl transition-all active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 8.45l-1.5 7.07c-.11.5-.4.62-.81.39l-2.28-1.68-1.1 1.06c-.12.12-.22.22-.45.22-.29 0-.38-.11-.53-.41L7.5 13.2 4.3 12.1c-.4-.13-.41-.4.09-.59l8.73-3.37c.36-.14.7.08.7.47 0 .2-.05.39-.12.58z"/>
          </svg>
          <span>Join Telegram Channel</span>
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(card);

  // Trigger animation
  setTimeout(() => {
    card.classList.remove("translate-y-24", "opacity-0");
    card.classList.add("translate-y-0", "opacity-100");
  }, 400);

  // Close functionality
  document.getElementById("close-btn").addEventListener("click", () => {
    card.classList.add("translate-y-24", "opacity-0");
    setTimeout(() => card.remove(), 500);
  });

})();
</script>