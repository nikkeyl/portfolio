import gulp from 'gulp'

import { plugins } from '../../settings/plugins.js'
import { paths } from '../../settings/paths.js'

import ttf2woff2 from 'gulp-ttf2woff2'
import fonter from 'gulp-fonter-fix'

const fontFacesFile = paths.fontFacesFile

const fontConverter = ({ taskName, fontExt }) => {
	const message = plugins.logger.catchErrors(`FONTS [${taskName}]`)

	if (plugins.fs.existsSync(fontFacesFile)) {
		return gulp
			.src(`${paths.src.fonts}*.woff2`)
			.pipe(message)
			.pipe(gulp.dest(paths.build.fonts))
	}

	return gulp
		.src(`${paths.src.fonts}*.${fontExt}`)
		.pipe(message)
		.pipe(
			fontExt === 'otf'
				? fonter({
					formats: ['ttf']
				})
				: ttf2woff2()
		)
		.pipe(gulp.dest(paths.src.fonts))
		.pipe(gulp.src(`${paths.src.fonts}*.woff2`))
		.pipe(gulp.dest(paths.build.fonts))
}

export { fontConverter }
