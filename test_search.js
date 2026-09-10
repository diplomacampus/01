const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Extract script blocks
const scripts = [];
const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
    if (match[1].trim()) {
        scripts.push(match[1]);
    }
}

console.log('Found', scripts.length, 'inline scripts');
scripts.forEach((s, idx) => {
    try {
        new Function(s);
        console.log('Script', idx, 'valid syntax');
    } catch(err) {
        console.error('Script', idx, 'Syntax Error:', err.message);
    }
});
