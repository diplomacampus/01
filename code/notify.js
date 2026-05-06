// notify.js — Horizontal Glass Card with Smart Auto‑Close
// Shows after 5 visits, never again after manual close.
// Closes on: ESC key, click outside, or deliberate scroll (>50px).
// v2.0 – Enhanced UX & Robustness

(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  // 1. Configuration & visit counter
  // ═══════════════════════════════════════════════════════════════
  const VISIT_KEY = 'dc_visit_count';
  const SHOWN_KEY = 'dc_notify_shown';
  const REQUIRED_VISITS = 5;
  const SCROLL_THRESHOLD = 50; // px – only close after deliberate scroll
  const SHOW_DELAY = 400;      // ms before slide-up animation

  let count = parseInt(localStorage.getItem(VISIT_KEY) || '0', 10);
  count += 1;
  localStorage.setItem(VISIT_KEY, count);

  // Never show if already dismissed or not enough visits
  if (localStorage.getItem(SHOWN_KEY) === 'true' || count < REQUIRED_VISITS) return;

  // Prevent duplicate card if script runs twice
  if (document.getElementById('notify-card')) return;

  // ═══════════════════════════════════════════════════════════════
  // 2. Create the glass card (Tailwind + graceful fallback)
  // ═══════════════════════════════════════════════════════════════
  const card = document.createElement('div');
  card.id = 'notify-card';
  card.setAttribute('role', 'dialog');
  card.setAttribute('aria-label', 'Stay updated notification');
  card.className = `
    fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl 
    bg-zinc-900/80 backdrop-blur-xl text-white 
    rounded-3xl shadow-2xl border border-white/20 overflow-hidden
    transform translate-y-24 opacity-0 transition-all duration-500 ease-out
    z-[9999] flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5
    flex-nowrap gap-3
  `;

  // Inner structure (with improved semantics and close button)
  card.innerHTML = `
    <button id="dc-close-btn" 
      class="absolute top-2.5 right-3 text-zinc-400 hover:text-white text-2xl leading-none transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full w-7 h-7 flex items-center justify-center"
      aria-label="Close notification">
      &times;
    </button>

    <div class="flex items-center gap-3 min-w-0">
      <div class="hidden sm:block text-3xl" aria-hidden="true">📢</div>
      <div class="min-w-0">
        <p class="font-semibold text-sm sm:text-base tracking-tight">Stay Updated</p>
        <p class="text-zinc-400 text-xs hidden sm:block">Join our channels for alerts & notes</p>
      </div>
    </div>

    <div class="flex items-center gap-2 sm:gap-3 shrink-0">
      <!-- WhatsApp Channel -->
      <a href="https://whatsapp.com/channel/0029Vb7izReKAwEfwz7Ixl1q" 
         target="_blank"
         rel="noopener noreferrer"
         class="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium py-2.5 px-4 sm:px-5 rounded-2xl transition-all active:scale-95 shadow-lg text-xs sm:text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.92-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
        <span class="hidden sm:inline">WhatsApp</span>
      </a>

      <!-- Telegram Channel -->
      <a href="https://t.me/diplomacampus" 
         target="_blank"
         rel="noopener noreferrer"
         class="flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b3] text-white font-medium py-2.5 px-4 sm:px-5 rounded-2xl transition-all active:scale-95 shadow-lg text-xs sm:text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0088cc]">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 8.45l-1.5 7.07c-.11.5-.4.62-.81.39l-2.28-1.68-1.1 1.06c-.12.12-.22.22-.45.22-.29 0-.38-.11-.53-.41L7.5 13.2 4.3 12.1c-.4-.13-.41-.4.09-.59l8.73-3.37c.36-.14.7.08.7.47 0 .2-.05.39-.12.58z"/>
        </svg>
        <span class="hidden sm:inline">Telegram</span>
      </a>
    </div>
  `;

  document.body.appendChild(card);

  // ═══════════════════════════════════════════════════════════════
  // 3. Animation & state management
  // ═══════════════════════════════════════════════════════════════
  let isHidden = false;
  let initialScrollY = window.scrollY;

  const hideCard = () => {
    if (isHidden) return;
    isHidden = true;

    // Animate out
    card.classList.add('translate-y-24', 'opacity-0');
    setTimeout(() => {
      if (card.parentNode) card.remove();
    }, 500);

    // Mark as shown forever
    localStorage.setItem(SHOWN_KEY, 'true');

    // Clean up all event listeners
    window.removeEventListener('scroll', onSmartScroll);
    document.removeEventListener('click', onOutsideClick);
    document.removeEventListener('keydown', onEscapeKey);
  };

  // ═══════════════════════════════════════════════════════════════
  // 4. Smart close triggers
  // ═══════════════════════════════════════════════════════════════
  // Close button
  const closeBtn = document.getElementById('dc-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', hideCard);

  // ESC key (accessibility)
  const onEscapeKey = (e) => {
    if (e.key === 'Escape') hideCard();
  };
  document.addEventListener('keydown', onEscapeKey);

  // Click outside the card (but not on interactive elements inside)
  const onOutsideClick = (e) => {
    if (!card.contains(e.target)) hideCard();
  };
  // Delay to avoid immediate close when card just appeared
  setTimeout(() => {
    if (!isHidden) document.addEventListener('click', onOutsideClick);
  }, 200);

  // Smart scroll: only close if user scrolls more than SCROLL_THRESHOLD px
  const onSmartScroll = () => {
    if (isHidden) return;
    const scrollDelta = Math.abs(window.scrollY - initialScrollY);
    if (scrollDelta > SCROLL_THRESHOLD) {
      hideCard();
    }
  };
  window.addEventListener('scroll', onSmartScroll);

  // ═══════════════════════════════════════════════════════════════
  // 5. Slide up with slight delay & update initial scroll reference
  // ═══════════════════════════════════════════════════════════════
  setTimeout(() => {
    if (!card) return;
    card.classList.remove('translate-y-24', 'opacity-0');
    card.classList.add('translate-y-0', 'opacity-100');
    // Re‑capture initial scroll position after card is shown
    // (avoids immediate close if page was already scrolled)
    initialScrollY = window.scrollY;
  }, SHOW_DELAY);

  // Optional: prevent body scroll lock? Not needed – just keeps UX clean.
})();