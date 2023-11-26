import { basename, resolve } from 'path';

import projectConfig from '../../project.config.js';

import PLUGINS from './plugins.js';

const {
	entry,
	gitHubUserName,
	cache: { folder },
	images: { watchExtensions, spriteFileName },
	server: { staticFolder }
} = projectConfig;
const { join } = PLUGINS;

const assetsFolder = 'assets';
const cacheFolder = folder;
const buildFolder = resolve(staticFolder);
const rootDirectory = basename(resolve());
const srcFolder = resolve('src');
const PATHS = {
	assetsFolder,
	buildFolder,
	cacheFolder,
	rootDirectory,
	srcFolder,
	fontFacesFile: join(srcFolder, 'scss/base/font-faces.scss'),
	gitIgnoreFile: '.gitignore',
	gitKeepFiles: '**/.gitkeep',
	remoteRepositoryLink: `https://github.com/${gitHubUserName}/${rootDirectory}.git`,
	gitHubPagesLink: `https://${gitHubUserName}.github.io/${rootDirectory}`,
	spriteFile: `../img/icons/${spriteFileName}.svg`,
	versionFile: join(cacheFolder, 'version.json'),
	build: {
		css: join(buildFolder, assetsFolder, 'css/'),
		fonts: join(buildFolder, assetsFolder, 'fonts/'),
		html: join(buildFolder, '/'),
		images: join(buildFolder, assetsFolder, 'img/'),
		js: join(buildFolder, assetsFolder, 'js/')
	},
	src: {
		favicon: join(srcFolder, 'favicon.ico'),
		fonts: join(srcFolder, 'fonts/'),
		htaccess: join(srcFolder, '.htaccess'),
		images: `${srcFolder}/img/**/*.{${watchExtensions}}`,
		js: join(srcFolder, `js/${entry}.js`),
		json: join(srcFolder, 'views/**/*.json'),
		markdown: join(srcFolder, 'views/markdown/*.md'),
		pug: join(srcFolder, 'views/**/*.pug'),
		robots: join(srcFolder, 'robots.txt'),
		sprite: join(srcFolder, 'img/sprite/*.svg'),
		static: join(srcFolder, 'static/'),
		svg: [join(srcFolder, 'img/**/*.svg'), join(`!${srcFolder}`, 'img/sprite/*.svg')]
	}
};

export default PATHS;
