

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.07d1bc0a.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.b7d5e21c.js"];
export const stylesheets = ["_app/immutable/assets/2.09054e10.css"];
export const fonts = [];
