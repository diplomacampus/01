const fs = require('fs');

const listeners = {};
const elements = {
    'updates-grid-container': { innerHTML: '' },
    'popular-pyqs-container': { innerHTML: '' },
    'branches-grid-container': { innerHTML: '' },
    'top-colleges-container': { innerHTML: '' },
    'exams-hub-container': { innerHTML: '' },
    'test-series-container': { innerHTML: '' },
    'hero-search-wrapper': { contains: () => false },
    'hero-search-input': { value: 'o', addEventListener: (evt, fn) => { listeners[evt] = fn; } },
    'hero-search-btn': { addEventListener: () => {} },
    'hero-search-dropdown': { innerHTML: '', classList: { remove: (c) => console.log('removed class', c), add: (c) => console.log('added class', c) } },
    'qotd-subject-badge': { textContent: '' },
    'qotd-question-text': { textContent: '' },
    'qotd-options-container': { innerHTML: '', querySelectorAll: () => [] },
    'qotd-feedback': { classList: { add: () => {}, remove: () => {} }, className: '' },
    'qotd-next-btn': { addEventListener: () => {} },
    'quiz-streak-count': { textContent: '' },
    'formula-category-badge': { textContent: '' },
    'formula-title': { textContent: '' },
    'formula-equation': { textContent: '' },
    'formula-description': { textContent: '' },
    'formula-index-indicator': { textContent: '' },
    'btn-prev-formula': { addEventListener: () => {} },
    'btn-next-formula': { addEventListener: () => {} },
    'btn-copy-formula': { addEventListener: () => {} }
};

global.window = {
    location: { href: '' },
    localStorage: { getItem: () => null, setItem: () => {} }
};

global.document = {
    addEventListener: (evt, cb) => {
        if (evt === 'DOMContentLoaded') cb();
    },
    getElementById: (id) => elements[id] || null,
    querySelectorAll: (sel) => []
};

// Load global-data.js
eval(fs.readFileSync('assets/js/global-data.js', 'utf8'));

// Load inline script from index.html
const html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/<!-- Homepage Dynamic Render Script -->[\s\S]*?<script>([\s\S]*?)<\/script>/i);
if (scriptMatch) {
    eval(scriptMatch[1]);
    console.log('Script executed cleanly.');
    console.log('Now triggering input event for "o"...');
    if (listeners['input']) {
        listeners['input']();
        console.log('Hero dropdown HTML length:', elements['hero-search-dropdown'].innerHTML.length);
        console.log('Hero dropdown output sample:\n', elements['hero-search-dropdown'].innerHTML.slice(0, 300));
    } else {
        console.log('No input listener registered!');
    }
}
