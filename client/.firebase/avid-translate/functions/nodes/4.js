

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.2281e3f2.js","_app/immutable/chunks/scheduler.26802031.js","_app/immutable/chunks/index.5241b709.js","_app/immutable/chunks/BreadcrumbItem.1d13ac9a.js","_app/immutable/chunks/bundle-mjs.f81d87c6.js"];
export const stylesheets = [];
export const fonts = [];
