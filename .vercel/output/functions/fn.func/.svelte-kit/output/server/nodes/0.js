

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.bd4a8b78.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.b7d5e21c.js"];
export const stylesheets = ["_app/immutable/assets/0.1848ef4a.css"];
export const fonts = ["_app/immutable/assets/poppins-devanagari-400-normal.478b3ab7.woff2","_app/immutable/assets/poppins-devanagari-400-normal.aa135e25.woff","_app/immutable/assets/poppins-latin-ext-400-normal.cb8bdeab.woff2","_app/immutable/assets/poppins-latin-ext-400-normal.8090b590.woff","_app/immutable/assets/poppins-latin-400-normal.7d93459d.woff2","_app/immutable/assets/poppins-latin-400-normal.2db0a254.woff"];
