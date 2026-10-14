import test from 'node:test';
import assert from 'node:assert/strict';
import { sitePath, routePath, pagePaths, projectPaths } from '../src/routing.js';

for (const base of ['/', '/tirsu-portfolio/']) {
  test(`page and project links round trip under ${base}`, () => {
    for (const path of ['/', ...pagePaths, ...projectPaths]) {
      const href = sitePath(path, base);
      assert.equal(routePath(href, base), path);
      assert.equal(routePath(`${href.replace(/\/$/, '')}/`, base), path);
    }
    assert.equal(routePath(base.slice(0, -1), base), '/');
  });
}

test('external links and in-page anchors keep their destinations', () => {
  for (const path of ['https://www.behance.net/vlad_t18', 'mailto:hello@example.com', 'tel:+431234', '#main', '//example.com/image.jpg']) {
    assert.equal(sitePath(path, '/tirsu-portfolio/'), path);
  }
});

test('public media uses the repository path and unrelated paths are excluded', () => {
  assert.equal(sitePath('/videos/hero.mp4', '/tirsu-portfolio/'), '/tirsu-portfolio/videos/hero.mp4');
  assert.equal(routePath('/another-site/cv', '/tirsu-portfolio/'), null);
  assert.equal(routePath('/tirsu-portfolio-other/cv', '/tirsu-portfolio/'), null);
});
