

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.93cf8bea.js","_app/immutable/chunks/scheduler.26802031.js","_app/immutable/chunks/index.5241b709.js"];
export const stylesheets = [];
export const fonts = [];
