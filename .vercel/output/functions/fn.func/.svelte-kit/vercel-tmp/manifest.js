export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["banner.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.10a55c56.js","app":"_app/immutable/entry/app.04f6746e.js","imports":["_app/immutable/entry/start.10a55c56.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/singletons.a93297f0.js","_app/immutable/entry/app.04f6746e.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.b7d5e21c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
