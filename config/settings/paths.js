import { basename, resolve } from 'path'

const rootDirectory = basename(resolve())
const buildFolder = resolve('dist')
const srcFolder = resolve('src')
const paths = {
	build: {
		static: `${buildFolder}/static/`,
		fonts: `${buildFolder}/fonts/`,
		images: `${buildFolder}/img/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		html: `${buildFolder}/`
	},
	src: {
		svg: [`${srcFolder}/img/**/*.svg`, `!${srcFolder}/img/sprites/*.svg`],
		images: `${srcFolder}/img/**/*.{jpg,png,webp}`,
		svgSprites: `${srcFolder}/img/sprites/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		static: `${srcFolder}/static/**/*.*`,
		favicon: `${srcFolder}/favicon.ico`,
		fonts: `${srcFolder}/fonts/`,
		pug: `${srcFolder}/views/*.pug`,
		js: `${srcFolder}/js/app.js`,
		html: `${srcFolder}/*.html`
	},
	repository: `https://github.com/nikkeyl/${rootDirectory}.git`,
	fontStylesFile: `${srcFolder}/scss/base/font-face.scss`,
	spriteFile: '../img/icons/sprite.svg',
	gitKeeps: '**/.gitkeep',
	binFolder: 'bin',
	rootDirectory,
	buildFolder,
	srcFolder
}

export { paths }
