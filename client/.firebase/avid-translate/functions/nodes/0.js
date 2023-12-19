

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.3565f995.js","_app/immutable/chunks/scheduler.26802031.js","_app/immutable/chunks/index.5241b709.js"];
export const stylesheets = [];
export const fonts = [];
