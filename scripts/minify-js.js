const fs = require('fs');
const path = require('path');
const terser = require('terser');

// Source and destination paths
const srcJsPath = path.join(__dirname, '../src/assets/js/scripts.js');
const distJsDir = path.join(__dirname, '../dist/assets/js');
const distJsPath = path.join(distJsDir, 'scripts.js');

// Ensure the destination directory exists
if (!fs.existsSync(distJsDir)) {
  fs.mkdirSync(distJsDir, { recursive: true });
  console.log('Created dist/assets/js directory');
}

// Read the JS file
fs.readFile(srcJsPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JS file:', err);
    return;
  }

  // Minify the JS
  terser.minify(data)
    .then(result => {
      // Write the minified JS to the destination
      fs.writeFileSync(distJsPath, result.code);
      console.log('Minified JS written to:', distJsPath);
    })
    .catch(error => {
      console.error('Error during JS minification:', error);
    });
});
