const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'www');
const files = [
  'index.html',
  'manifest.json',
  'sw.js',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png'
];

fs.mkdirSync(output, { recursive: true });

files.forEach(function (file) {
  const source = path.join(root, file);
  if (!fs.existsSync(source)) {
    throw new Error('Required web asset is missing: ' + source);
  }
  fs.copyFileSync(source, path.join(output, file));
});
