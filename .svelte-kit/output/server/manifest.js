export const manifest = {
	appDir: "_app",
	assets: new Set(["anime_card.jpg","anime_card2.jpg","card.png","favicon.png","images/anime_card.jpg","images/anime_card2.jpg","images/card.png","images/shiny_anime_card.jpg","shiny_anime_card.jpg","smui-dark.css","smui.css"]),
	_: {
		mime: {".jpg":"image/jpeg",".png":"image/png",".css":"text/css"},
		entry: {"file":"start-14fb000c.js","js":["start-14fb000c.js","chunks/vendor-c9a5fe65.js"],"css":[]},
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
