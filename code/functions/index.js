const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { createCanvas } = require('canvas');
admin.initializeApp();

const BRANCH_ABBR = {
  "Computer Science Engineering": "CSE",
  "Information Technology": "IT",
  "Mechanical Engineering": "MECH",
  "Civil Engineering": "CIVIL",
  "Electrical Engineering": "EE",
  "Electrical and Electronics Engineering": "EEE",
  "Electronics & Communication Engineering": "ECE",
  "Automobile Engineering": "AUTO",
  "Chemical Engineering": "CHEM",
  "Plastic Engineering": "PLASTIC",
  "Architecture Assistantship": "ARCH",
  "Agriculture Engineering": "AGRI",
  "Common": "COMMON"
};

// Serves the note detail page with OG meta tags
exports.notePage = functions.https.onRequest(async (req, res) => {
  const noteId = req.query.id;
  if (!noteId) { res.status(400).send('Missing note id'); return; }

  try {
    const snap = await admin.database().ref(`notes/${noteId}`).once('value');
    const note = snap.val();
    if (!note) { res.status(404).send('Note not found'); return; }

    const topic = note.topic || 'Diploma Note';
    const subject = note.subject || '';
    const branchShort = BRANCH_ABBR[note.branch] || note.branch?.substring(0,4).toUpperCase();
    const semester = note.semester || '';
    const description = `${subject} · ${branchShort} · ${semester}`;
    const ogImageUrl = `https://${req.hostname}/generateOGImage?id=${noteId}`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${topic} | Diploma Campus</title>
  <meta property="og:type" content="website">
  <meta property="og:title" content="${topic}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${ogImageUrl}">
  <meta property="og:url" content="https://${req.hostname}/note?id=${noteId}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${topic}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${ogImageUrl}">
  <style>
    body { font-family: 'Inter', sans-serif; background: #f9fafb; margin: 0; padding: 20px; text-align: center; }
    a { color: #0f766e; text-decoration: none; font-weight: 600; }
    .card { background: white; border-radius: 16px; padding: 24px; max-width: 500px; margin: 40px auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  </style>
</head>
<body>
  <div class="card">
    <h1>${topic}</h1>
    <p>${subject} · ${branchShort} · ${semester}</p>
    <p><a href="${note.link}" target="_blank">📎 Open Resource</a></p>
  </div>
  <p style="color:#6b7280">Diploma Campus</p>
</body>
</html>`;

    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating page');
  }
});

// Dynamically generates the OG image
exports.generateOGImage = functions.https.onRequest(async (req, res) => {
  const noteId = req.query.id;
  if (!noteId) { res.status(400).send('Missing note id'); return; }

  try {
    const snap = await admin.database().ref(`notes/${noteId}`).once('value');
    const note = snap.val();
    if (!note) { res.status(404).send('Note not found'); return; }

    const width = 1200, height = 630;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#14b8a6');
    gradient.addColorStop(1, '#facc15');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, 8);

    // Topic
    ctx.font = 'bold 52px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#1f2937';
    ctx.fillText(note.topic || 'Untitled', 60, 120);

    // Subject
    ctx.font = '28px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#4b5563';
    ctx.fillText(note.subject || '', 60, 180);

    const branchShort = BRANCH_ABBR[note.branch] || note.branch?.substring(0,4).toUpperCase();
    ctx.font = 'bold 24px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#0f766e';
    ctx.fillText(`${branchShort} · ${note.semester}`, 60, 240);

    // Tags
    const tags = note.tags ? note.tags.split(',').map(t => '#' + t.trim()).join('  ') : '';
    ctx.font = '20px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.fillText(tags, 60, 300);

    // Uploader + date
    const uploadDate = note.timestamp ? new Date(note.timestamp).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
    ctx.font = '18px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#9ca3af';
    ctx.fillText(`By DiplomaCampus  ·  ${uploadDate}`, 60, 360);

    // Resource URL
    ctx.fillStyle = '#0f766e';
    ctx.font = '20px "Inter", "Segoe UI", sans-serif';
    ctx.fillText('🔗 ' + (note.link || 'https://diplomacampus.web.app'), 60, 590);

    // Branding
    ctx.fillStyle = '#0f766e';
    ctx.font = 'bold 36px "Inter", "Segoe UI", sans-serif';
    ctx.fillText('DIPLOMA CAMPUS', width - 400, 585);

    const buffer = canvas.toBuffer('image/png');
    res.set('Content-Type', 'image/png');
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.send(buffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating image');
  }
});
