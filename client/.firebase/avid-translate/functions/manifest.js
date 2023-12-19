export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/prism_dark.css","css/prism_tomorrow_night.css","favicon.png","js/prism.js"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.aff5dcf6.js","app":"_app/immutable/entry/app.1c1f4324.js","imports":["_app/immutable/entry/start.aff5dcf6.js","_app/immutable/chunks/scheduler.26802031.js","_app/immutable/chunks/singletons.c610f648.js","_app/immutable/chunks/index.725a24d2.js","_app/immutable/entry/app.1c1f4324.js","_app/immutable/chunks/scheduler.26802031.js","_app/immutable/chunks/index.5241b709.js","_app/immutable/chunks/environment.60829b93.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/app",
				pattern: /^\/app\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/app/about",
				pattern: /^\/app\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/app/guide",
				pattern: /^\/app\/guide\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/app/translate",
				pattern: /^\/app\/translate\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
