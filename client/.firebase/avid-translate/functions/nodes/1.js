

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3be3b5c7.js","_app/immutable/chunks/scheduler.26802031.js","_app/immutable/chunks/index.5241b709.js","_app/immutable/chunks/stores.b00d0775.js","_app/immutable/chunks/singletons.c610f648.js","_app/immutable/chunks/index.725a24d2.js"];
export const stylesheets = [];
export const fonts = [];
