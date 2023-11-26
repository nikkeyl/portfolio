const projectConfig = {
	entry: 'app',
	language: 'en',
	gitHubUserName: 'nikkeyl',
	cache: {
		folder: '.cache',
		settings: {
			type: 'filesystem',
			// cacheDirectory: '.cache'
		}
	},
	formatters: {
		languages: {
			pugPretty: true,
			sassOutputStyle: 'expanded'
		}
	},
	html: {
		accessibilityLevel: 'WCAG2AAA',
		isJavaScriptInHead: true,
		meta: {
			description: 'Fast and high-quality website development'
		},
		version: {
			assets: ['css', 'js'],
			format: '%DT%'
		}
	},
	ignore: {
		git: ['.cache', 'dist', 'node_modules']
	},
	images: {
		watchExtensions: ['jpg', 'png', 'webp', 'ico'],
		optimizationLevel: 3,
		spriteFileName: 'sprite',
		webp: true,
		avif: false
	},
	notifier: {
		notify: true,
		sound: 'Pop'
	},
	server: {
		port: 3000,
		sourceMap: 'inline-source-map',
		staticFolder: 'dist',
		stats: 'errors-warnings',
		watchFiles: []
	},
	remove: ['*.md', 'LICENSE', '!README.md']
}

export default projectConfig
