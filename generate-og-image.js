// Simple script to generate OG image
// Run with: node generate-og-image.js

const fs = require('fs');
const path = require('path');

console.log('\n📸 OG Image Generator\n');
console.log('Since we need a proper screenshot, please use one of these methods:\n');
console.log('Method 1 (Easiest):');
console.log('1. Open: file://' + path.join(__dirname, 'public/og-template.html'));
console.log('2. Press Cmd+Shift+4, then Space');
console.log('3. Click the browser window to screenshot it');
console.log('4. Save as: og-image.png in the public folder\n');
console.log('Method 2 (Online tool):');
console.log('1. Visit https://www.screely.com');
console.log('2. Upload og-template.html or paste the URL');
console.log('3. Set size to 1200x630');
console.log('4. Download as og-image.png\n');
console.log('Method 3 (Browser DevTools):');
console.log('1. Open og-template.html in Chrome/Firefox');
console.log('2. Open DevTools (F12)');
console.log('3. Toggle device toolbar (Cmd+Shift+M)');
console.log('4. Set dimensions to 1200x630');
console.log('5. Take screenshot (Cmd+Shift+P > "Capture screenshot")\n');
console.log('Once you have og-image.png in the public folder, run:');
console.log('git add public/og-image.png && git commit -m "Add OG image" && git push\n');
