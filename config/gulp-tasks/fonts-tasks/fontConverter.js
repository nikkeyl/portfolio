import { plugins } from '../../settings/plugins.js'
import { paths } from '../../settings/paths.js'

import ttf2woff2 from 'gulp-ttf2woff2'
import fonter from 'gulp-fonter-fix'

const {
	src: { fonts: fontsSrc },
	build: { fonts: fontsDest },
	fontFacesFile
} = paths
const { gulp, notifier, fs } = plugins

const fontConverter = ({ taskName, fileExt }) => {
	const message = notifier.errorHandler(`FONTS [${taskName}]`)
	const woff2 = `${fontsSrc}*.woff2`
	const usePlugin = fileExt === 'otf' ? fonter({ formats: ['ttf'] }) : ttf2woff2()

	if (fs.existsSync(fontFacesFile)) {
		return gulp
			.src(woff2)
			.pipe(message)
			.pipe(gulp.dest(fontsDest))
	}

	return gulp
		.src(`${fontsSrc}*.${fileExt}`)
		.pipe(message)
		.pipe(usePlugin)
		.pipe(gulp.dest(fontsSrc))
		.pipe(gulp.src(woff2))
		.pipe(gulp.dest(fontsDest))
}

export { fontConverter }
