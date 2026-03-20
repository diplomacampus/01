/* NoteVault — Main JS */

// ── Preloader ──────────────────────────────────────────────
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) setTimeout(() => pre.classList.add('hidden'), 800);
});

// ── Navbar scroll ──────────────────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Active nav link ────────────────────────────────────────
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// ── Hamburger ──────────────────────────────────────────────
const ham = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (ham && mobileMenu) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !mobileMenu.contains(e.target)) {
      ham.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

// ── Back to top ────────────────────────────────────────────
const btt = document.querySelector('.btt');
if (btt) {
  window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 400));
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Scroll reveal ──────────────────────────────────────────
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ── Counter animation ──────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  let current = 0;
  const step = Math.ceil(target / 60);
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = prefix + current.toLocaleString() + suffix;
    if (current >= target) clearInterval(interval);
  }, 25);
}
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));

// ── Accordion ──────────────────────────────────────────────
document.querySelectorAll('.accordion-hdr').forEach(hdr => {
  hdr.addEventListener('click', () => {
    const body = hdr.nextElementSibling;
    const open = body.classList.contains('open');
    hdr.closest('.accordion-item')?.parentElement?.querySelectorAll('.accordion-body.open').forEach(b => {
      b.classList.remove('open');
      b.previousElementSibling.classList.remove('open');
    });
    if (!open) { body.classList.add('open'); hdr.classList.add('open'); }
  });
});

// ── FAQ Accordion ──────────────────────────────────────────
document.querySelectorAll('.faq-hdr').forEach(hdr => {
  hdr.addEventListener('click', () => {
    const body = hdr.nextElementSibling;
    const open = body.classList.contains('open');
    document.querySelectorAll('.faq-body.open').forEach(b => {
      b.classList.remove('open');
      b.previousElementSibling.classList.remove('open');
    });
    if (!open) { body.classList.add('open'); hdr.classList.add('open'); }
  });
});

// ── Branch tabs (notes page) ───────────────────────────────
const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.semester-section');
if (tabs.length && sections.length) {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const branch = tab.dataset.branch;
      sections.forEach(s => s.style.display = (s.dataset.branch === branch || branch === 'all') ? 'block' : 'none');
    });
  });
}

// ── Search (notes page) ────────────────────────────────────
const searchInput = document.getElementById('notesSearch');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    document.querySelectorAll('.subj-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.closest('.accordion-item') && (card.style.display = text.includes(q) ? 'block' : 'none');
      card.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

// ── Pricing toggle ─────────────────────────────────────────
const tog = document.querySelector('.tog');
if (tog) {
  tog.addEventListener('click', () => {
    tog.classList.toggle('on');
    const yearly = tog.classList.contains('on');
    document.querySelectorAll('[data-monthly]').forEach(el => {
      el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
    });
  });
}

// ── Login form validation ──────────────────────────────────
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    const email = document.getElementById('email');
    const emailWrap = email?.closest('.inp-wrap');
    const emailErr = document.getElementById('emailErr');
    const pass = document.getElementById('password');
    const passWrap = pass?.closest('.inp-wrap');
    const passErr = document.getElementById('passErr');

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email?.value || '')) {
      emailWrap?.classList.add('error'); emailWrap?.classList.remove('success');
      if (emailErr) { emailErr.textContent = 'Please enter a valid email address.'; emailErr.classList.add('show'); }
      valid = false;
    } else {
      emailWrap?.classList.remove('error'); emailWrap?.classList.add('success');
      if (emailErr) emailErr.classList.remove('show');
    }

    if ((pass?.value || '').length < 6) {
      passWrap?.classList.add('error'); passWrap?.classList.remove('success');
      if (passErr) { passErr.textContent = 'Password must be at least 6 characters.'; passErr.classList.add('show'); }
      valid = false;
    } else {
      passWrap?.classList.remove('error'); passWrap?.classList.add('success');
      if (passErr) passErr.classList.remove('show');
    }

    if (valid) { loginForm.querySelector('button[type="submit"]').textContent = 'Signing in…'; }
  });

  // Toggle password visibility
  document.getElementById('togglePass')?.addEventListener('click', () => {
    const p = document.getElementById('password');
    const i = document.getElementById('togglePass');
    if (p.type === 'password') { p.type = 'text'; i.className = 'bx bx-hide'; }
    else { p.type = 'password'; i.className = 'bx bx-show'; }
  });
}

// ── Download mock ──────────────────────────────────────────
document.querySelectorAll('.dl-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Downloading…';
    setTimeout(() => { btn.innerHTML = '<i class="bx bx-check"></i> Done!'; setTimeout(() => btn.innerHTML = orig, 1500); }, 1200);
  });
});

// ── Privacy sidebar active ─────────────────────────────────
const privSections = document.querySelectorAll('.priv-section');
const privLinks = document.querySelectorAll('.priv-sidebar nav a');
if (privSections.length && privLinks.length) {
  const privObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        privLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  privSections.forEach(s => privObs.observe(s));
}