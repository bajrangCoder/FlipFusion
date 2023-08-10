

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fb05dbfd.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.b7d5e21c.js","_app/immutable/chunks/singletons.a93297f0.js"];
export const stylesheets = [];
export const fonts = [];
