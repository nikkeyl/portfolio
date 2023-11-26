import svgSprite from 'gulp-svg-sprite';

import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

import svgSpriteConfig from '../../../svgSprite.config.js';

const {
	spriteFile,
	srcFolder,
	src: { sprite: spriteSrc }
} = PATHS;
const {
	join,
	notifier,
	status,
	gulp: { dest, src },
	fs: {
		existsSync,
		promises: { readdir }
	}
} = PLUGINS;

const sprite = async (updateFlag) => {
	const taskName = 'sprite';
	const spriteSvg = join(srcFolder, spriteFile);
	const isSpriteFileExists = existsSync(spriteSvg) && !updateFlag;

	if (isSpriteFileExists) {
		return notifier.warning(taskName, {
			path: spriteSvg,
			message: isSpriteFileExists
		});
	}

	try {
		const hasUpdate = status.state(spriteSvg, updateFlag);

		src('src/img/sprite/*.svg')
			.pipe(notifier.errorHandler(taskName))
			.pipe(svgSprite(svgSpriteConfig))
			.pipe(dest(srcFolder));

		return notifier.success(taskName, {
			path: spriteSrc,
			message: hasUpdate
		});
	} catch (error) {
		return notifier.error(taskName, {
			path: spriteSrc,
			message: error
		});
	}
};

export default sprite;
