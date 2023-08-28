import { basename, resolve } from 'path'

const rootDirectory = basename(resolve())
const buildFolder = resolve('dist')
const srcFolder = resolve('src')
const binFolder = 'bin'
const paths = {
	build: {
		// static: `${buildFolder}/static/`,
		fonts: `${buildFolder}/fonts/`,
		images: `${buildFolder}/img/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		html: `${buildFolder}/`
	},
	src: {
		svg: [`${srcFolder}/img/**/*.svg`, `!${srcFolder}/img/sprites/*.svg`],
		sprite: `${srcFolder}/img/sprite/*.svg`,
		json: `${srcFolder}/views/**/*.json`,
		// scss: `${srcFolder}/scss/style.scss`,
		favicon: `${srcFolder}/favicon.ico`,
		htaccess: `${srcFolder}/.htaccess`,
		pug: `${srcFolder}/views/**/*.pug`,
		robots: `${srcFolder}/robots.txt`,
		images: `${srcFolder}/img/**/*.*`,
		static: `${srcFolder}/static/`,
		fonts: `${srcFolder}/fonts/`,
		js: `${srcFolder}/js/app.js`,
		// html: `${srcFolder}/*.html`
	},
	repository: `https://github.com/nikkeyl/${rootDirectory}.git`,
	fontFacesFile: `${srcFolder}/scss/base/font-face.scss`,
	versionFile: `${binFolder}/version.json`,
	spriteFile: '../img/icons/sprite.svg',
	gitKeepFiles: '**/.gitkeep',
	rootDirectory,
	buildFolder,
	binFolder,
	srcFolder
}

export { paths }
