const fs = require('fs');
const path = require('path');
const cssnano = require('cssnano');
const postcss = require('postcss');

// Source and destination paths
const srcCssPath = path.join(__dirname, '../src/assets/css/styles.css');
const distCssDir = path.join(__dirname, '../dist/assets/css');
const distCssPath = path.join(distCssDir, 'styles.css');

// Ensure the destination directory exists
if (!fs.existsSync(distCssDir)) {
  fs.mkdirSync(distCssDir, { recursive: true });
  console.log('Created dist/assets/css directory');
}

// Read the CSS file
fs.readFile(srcCssPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSS file:', err);
    return;
  }

  // Minify the CSS
  postcss([cssnano])
    .process(data, { from: srcCssPath, to: distCssPath })
    .then(result => {
      // Write the minified CSS to the destination
      fs.writeFileSync(distCssPath, result.css);
      console.log('Minified CSS written to:', distCssPath);
    })
    .catch(error => {
      console.error('Error during CSS minification:', error);
    });
});
