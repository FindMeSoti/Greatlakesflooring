const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const serviceSlugs = [
  'carpet-installation',
  'carpet-replacement',
  'carpet-repair',
  'commercial-carpet-installation',
  'residential-carpet-installation',
  'vinyl-plank-flooring',
  'laminate-flooring',
  'flooring-estimate'
];

const imageSets = serviceSlugs.map((slug) => {
  const htmlPath = path.join(root, slug, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const carouselMatches = [...html.matchAll(/<div class="carousel-preview">([\s\S]*?)<\/div>/g)].flatMap((match) => {
    const slideHtml = match[1];
    return [...slideHtml.matchAll(/<img[^>]+src="([^"]+)"/g)].map((imgMatch) => imgMatch[1]);
  });
  return { slug, images: carouselMatches.slice(0, 3) };
});

const seen = new Map();
for (const { slug, images } of imageSets) {
  const key = images.join('|');
  assert.ok(images.length >= 3, `${slug} should have at least 3 carousel images`);
  assert.ok(!seen.has(key), `${slug} shares the same carousel image set as ${seen.get(key)}`);
  seen.set(key, slug);
}

console.log('Carousel image sets are distinct for each service page.');
