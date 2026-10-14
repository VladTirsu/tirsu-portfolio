import { defineConfig } from 'vite';
import { pagePaths, projectPaths } from './src/routing.js';

export default defineConfig({
  esbuild: { legalComments: 'inline' },
  plugins: [{
    name: 'static-page-entries',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const source = bundle['index.html'].source;
      // Pages serves these directories directly, including on refresh.
      for (const path of [...pagePaths, ...projectPaths]) {
        this.emitFile({ type: 'asset', fileName: `${path.slice(1)}/index.html`, source });
      }
      this.emitFile({ type: 'asset', fileName: '404.html', source });
      this.emitFile({ type: 'asset', fileName: '.nojekyll', source: '' });
    },
  }],
});
