const sharp = require('sharp');

sharp('public/images/img_footer_logo.avif')
  .avif({ quality: 50 })
  .toFile('public/images/img_footer_logo_optimized.avif')
  .then(() => console.log('Optimized image saved as img_footer_logo_optimized.avif'))
  .catch(err => console.error(err)); 