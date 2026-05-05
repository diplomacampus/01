// notify.js — Horizontal glass card · slides up after 5 visits · auto‑close on scroll / tap outside
(function () {
  // ═══════════════════════════════════════════════
  // 1. Visit counter (localStorage) – show only after 5th visit
  // ═══════════════════════════════════════════════
  const VISIT_KEY = "dc_visit_count";
  const SHOWN_KEY = "dc_notify_shown";
  const REQUIRED_VISITS = 5;

  let count = parseInt(localStorage.getItem(VISIT_KEY) || "0", 10);
  count += 1;
  localStorage.setItem(VISIT_KEY, count);

  // If already shown, or not yet 5 visits → stop
  if (localStorage.getItem(SHOWN_KEY) === "true" || count < REQUIRED_VISITS) return;

  // ═══════════════════════════════════════════════
  // 2. Create the horizontal glass card
  // ═══════════════════════════════════════════════
  const card = document.createElement("div");
  card.id = "notify-card";
  card.className = `
    fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl 
    bg-zinc-900/80 backdrop-blur-xl text-white 
    rounded-3xl shadow-2xl border border-white/10 overflow-hidden
    transform translate-y-24 opacity-0 transition-all duration-500 ease-out
    z-[9999] flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5
    flex-nowrap gap-3
  `;

  card.innerHTML = `
    <!-- Close button (top‑right corner) -->
    <button id="dc-close-btn" 
      class="absolute top-2 right-3 text-zinc-400 hover:text-white text-2xl leading-none transition-colors z-10">
      &times;
    </button>

    <!-- Heading -->
    <div class="flex items-center gap-3 min-w-0">
      <div class="hidden sm:block text-3xl">📢</div>
      <div class="min-w-0">
        <p class="font-semibold text-sm sm:text-base tracking-tight whitespace-nowrap">Stay Updated</p>
        <p class="text-zinc-400 text-xs hidden sm:block">Join our channels for alerts & notes</p>
      </div>
    </div>

    <!-- Buttons: WhatsApp + Telegram -->
    <div class="flex items-center gap-2 sm:gap-3 shrink-0">
      <!-- WhatsApp -->
      <a href="https://whatsapp.com/channel/0029Vb7izReKAwEfwz7Ixl1q" 
         target="_blank"
         class="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium py-2.5 px-4 sm:px-5 rounded-2xl transition-all active:scale-95 shadow-lg text-xs sm:text-sm whitespace-nowrap">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.92-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
        <span class="hidden sm:inline">WhatsApp</span>
      </a>

      <!-- Telegram -->
      <a href="https://t.me/diplomacampus" 
         target="_blank"
         class="flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b3] text-white font-medium py-2.5 px-4 sm:px-5 rounded-2xl transition-all active:scale-95 shadow-lg text-xs sm:text-sm whitespace-nowrap">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 8.45l-1.5 7.07c-.11.5-.4.62-.81.39l-2.28-1.68-1.1 1.06c-.12.12-.22.22-.45.22-.29 0-.38-.11-.53-.41L7.5 13.2 4.3 12.1c-.4-.13-.41-.4.09-.59l8.73-3.37c.36-.14.7.08.7.47 0 .2-.05.39-.12.58z"/>
        </svg>
        <span class="hidden sm:inline">Telegram</span>
      </a>
    </div>
  `;

  document.body.appendChild(card);

  // ═══════════════════════════════════════════════
  // 3. Show animation
  // ═══════════════════════════════════════════════
  setTimeout(() => {
    card.classList.remove("translate-y-24", "opacity-0");
    card.classList.add("translate-y-0", "opacity-100");
  }, 400);

  // ═══════════════════════════════════════════════
  // 4. Close functions
  // ═══════════════════════════════════════════════
  const hideCard = () => {
    card.classList.add("translate-y-24", "opacity-0");
    setTimeout(() => {
      card.remove();
      window.removeEventListener("scroll", hideCard);
      document.removeEventListener("click", outsideClick);
    }, 500);
    // Mark as shown so it never appears again
    localStorage.setItem(SHOWN_KEY, "true");
  };

  // Close button
  document.getElementById("dc-close-btn").addEventListener("click", hideCard);

  // Scroll to close
  window.addEventListener("scroll", hideCard, { once: true });

  // Tap outside to close
  const outsideClick = (e) => {
    if (!card.contains(e.target)) {
      hideCard();
    }
  };
  setTimeout(() => {
    document.addEventListener("click", outsideClick);
  }, 200);

})();