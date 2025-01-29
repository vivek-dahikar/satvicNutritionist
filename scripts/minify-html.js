const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');

// Directory for source HTML files
const srcDir = path.join(__dirname, '../src');

// Directory for output HTML files
const distDir = path.join(__dirname, '../dist');

// Function to minify HTML files
const minifyHTML = async (filePath, outputPath) => {
  try {
    // Read the content of the HTML file
    const content = fs.readFileSync(filePath, 'utf8');

    // Minify the HTML content
    const minifiedContent = await minify(content, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyCSS: true,
      minifyJS: true,
    });

    // Write the minified content to the destination file
    fs.writeFileSync(outputPath, minifiedContent, 'utf8');
    console.log(`Minified: ${outputPath}`);
  } catch (err) {
    console.error(`Error minifying file ${filePath}:`, err);
  }
};

// Minify all HTML files in the source folder
const minifyAllHTML = () => {
  // Get all the HTML files in the src folder
  const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.html'));

  files.forEach(file => {
    const filePath = path.join(srcDir, file);
    const outputPath = path.join(distDir, file);

    // Minify and save each HTML file
    minifyHTML(filePath, outputPath);
  });
};

// Start the minification process
minifyAllHTML();
