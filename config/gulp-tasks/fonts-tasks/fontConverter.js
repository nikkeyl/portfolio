import { paths } from '../../settings/paths.js'
import { plugins } from '../../settings/plugins.js'

import fonter from 'gulp-fonter-fix'
import ttf2woff2 from 'gulp-ttf2woff2'

// eslint
// assets folder
// sort alphabetical
// entity naming
// responsive-output mixin

const {
	fontFacesFile,
	build: { fonts: fontsDest },
	src: { fonts: fontsSrc }
} = paths
const {
	notifier,
	gulp: { dest, src },
	fs: { existsSync }
} = plugins

const fontConverter = ({ taskName, fileExt }) => {
	const message = notifier.errorHandler(taskName)

	// https://github.com/nikkeyl/site-builder/issues/101
	const woff2 = `${fontsSrc}*.woff2`
	// --------------------------------

	const selectPlugin = fileExt === 'otf'
		? fonter({ formats: ['ttf'] })
		: ttf2woff2()

	// Если будет fontFacesFile и woff2 тогда новые файлы .otf или .ttf не будут сконвертированы
	if (existsSync(fontFacesFile) && existsSync(woff2)) {
		return src(woff2)
			.pipe(message)
			.pipe(dest(fontsDest))
	}

	return src(`${fontsSrc}*.${fileExt}`)
		.pipe(message)
		.pipe(selectPlugin)
		.pipe(dest(fontsSrc))
		.pipe(src(woff2))
		.pipe(dest(fontsDest))
}

export { fontConverter }
