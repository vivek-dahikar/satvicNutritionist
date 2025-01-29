const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

// Source and destination paths
const srcDir = path.join(__dirname, '../src/assets');
const distDir = path.join(__dirname, '../dist/assets');

// Ensure the destination folder exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log('Created dist/assets folder');
}

// Log source and destination paths for debugging
console.log(`Copying from: ${srcDir}`);
console.log(`Copying to: ${distDir}`);

// Copy all contents from src/assets to dist/assets
ncp(srcDir, distDir, (err) => {
  if (err) {
    return console.error('Error copying assets:', err);
  }
  console.log('Assets copied successfully.');
});
