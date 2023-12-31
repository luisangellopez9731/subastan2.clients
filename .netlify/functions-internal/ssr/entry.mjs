import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_1d0bf3e0.mjs';

const _page0  = () => import('./chunks/generic_6ddf74dc.mjs');
const _page1  = () => import('./chunks/index_350aa369.mjs');
const _page2  = () => import('./chunks/index_ece1d263.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.5.3_typescript@5.2.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/reset-password/index.astro", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
