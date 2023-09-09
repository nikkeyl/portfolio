import { basename, resolve } from 'path'

const assetsFolder = 'assets'
const binFolder = 'bin'
const buildFolder = resolve('dist')
const rootDirectory = basename(resolve())
const srcFolder = resolve('src')
const paths = {
	assetsFolder,
	binFolder,
	buildFolder,
	rootDirectory,
	srcFolder,
	fontFacesFile: `${srcFolder}/scss/base/font-face.scss`,
	gitKeepFiles: '**/.gitkeep',
	repository: `https://github.com/nikkeyl/${rootDirectory}.git`,
	spriteFile: '../img/icons/sprite.svg',
	versionFile: `${binFolder}/version.json`,
	build: {
		css: `${buildFolder}/${assetsFolder}/css/`,
		// fonts ???
		fonts: `${buildFolder}/${assetsFolder}/fonts/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/${assetsFolder}/img/`,
		js: `${buildFolder}/${assetsFolder}/js/`
	},
	src: {
		favicon: `${srcFolder}/favicon.ico`,
		fonts: `${srcFolder}/fonts/`,
		htaccess: `${srcFolder}/.htaccess`,
		images: `${srcFolder}/img/**/*.*`,
		js: `${srcFolder}/js/app.js`,
		json: `${srcFolder}/views/**/*.json`,
		pug: `${srcFolder}/views/**/*.pug`,
		robots: `${srcFolder}/robots.txt`,
		sprite: `${srcFolder}/img/sprite/*.svg`,
		static: `${srcFolder}/static/`,
		svg: [`${srcFolder}/img/**/*.svg`, `!${srcFolder}/img/sprite/*.svg`]
	}
}

export { paths }
