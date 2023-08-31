import { basename, resolve } from 'path'

const assetsFolder = 'assets'
const binFolder = 'bin'
const buildFolder = resolve('dist')
const rootDirectory = basename(resolve())
const srcFolder = resolve('src')
const paths = {
	build: {
		css: `${buildFolder}/${assetsFolder}/css/`,
		fonts: `${buildFolder}/${assetsFolder}/fonts/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/${assetsFolder}/img/`,
		js: `${buildFolder}/${assetsFolder}/js/`,
		// static: `${buildFolder}/${assetsFolder}/static/`
	},
	src: {
		favicon: `${srcFolder}/favicon.ico`,
		fonts: `${srcFolder}/fonts/`,
		htaccess: `${srcFolder}/.htaccess`,
		// html: `${srcFolder}/*.html`,
		images: `${srcFolder}/img/**/*.*`,
		js: `${srcFolder}/js/app.js`,
		json: `${srcFolder}/views/**/*.json`,
		pug: `${srcFolder}/views/**/*.pug`,
		robots: `${srcFolder}/robots.txt`,
		// scss: `${srcFolder}/scss/style.scss`,
		sprite: `${srcFolder}/img/sprite/*.svg`,
		static: `${srcFolder}/static/`,
		svg: [`${srcFolder}/img/**/*.svg`, `!${srcFolder}/img/sprites/*.svg`]
	},
	assetsFolder,
	binFolder,
	buildFolder,
	fontFacesFile: `${srcFolder}/scss/base/font-face.scss`,
	gitKeepFiles: '**/.gitkeep',
	repository: `https://github.com/nikkeyl/${rootDirectory}.git`,
	rootDirectory,
	spriteFile: '../img/icons/sprite.svg',
	srcFolder,
	versionFile: `${binFolder}/version.json`
}

export { paths }
