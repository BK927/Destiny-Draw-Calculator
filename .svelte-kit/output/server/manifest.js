export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","smui-dark.css","smui.css"]),
	_: {
		mime: {".png":"image/png",".css":"text/css"},
		entry: {"file":"start-ed0944fc.js","js":["start-ed0944fc.js","chunks/vendor-c9a5fe65.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
