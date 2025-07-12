const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  'img_header_logo.png',
  'img_footer_logo.png',
  'img_card.png',
];

const imagesDir = path.join(__dirname, 'public', 'images');

images.forEach((img) => {
  const inputPath = path.join(imagesDir, img);
  const outputPath = path.join(imagesDir, img.replace('.png', '.avif'));
  if (fs.existsSync(inputPath)) {
    sharp(inputPath)
      .toFormat('avif')
      .toFile(outputPath)
      .then(() => console.log(`Converted ${img} to AVIF.`))
      .catch((err) => console.error(`Error converting ${img}:`, err));
  } else {
    console.warn(`File not found: ${inputPath}`);
  }
}); 