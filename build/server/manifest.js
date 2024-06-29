const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["LS.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DabKx34M.js","app":"_app/immutable/entry/app.BpB2QqHj.js","imports":["_app/immutable/entry/start.DabKx34M.js","_app/immutable/chunks/entry.ApiIhOUF.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.BpB2QqHj.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.ET_bncVS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-COKFjYq6.js')),
			__memo(() => import('./chunks/1-RkHGPkcl.js')),
			__memo(() => import('./chunks/2-CaSFwxYA.js')),
			__memo(() => import('./chunks/3-BMQbslug.js')),
			__memo(() => import('./chunks/4-CX--COXX.js')),
			__memo(() => import('./chunks/5-V4CFOuWs.js')),
			__memo(() => import('./chunks/6-bIrxkLc2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/project",
				pattern: /^\/project\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
