import gulp from 'gulp'

import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import ttf2woff2 from 'gulp-ttf2woff2'
import fonter from 'gulp-fonter-fix'

const cb = () => { }

const fontWeights = {
	thin: 100,
	hairline: 100,
	extralight: 200,
	ultralight: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semibold: 600,
	demibold: 600,
	bold: 700,
	extrabold: 800,
	ultrabold: 800,
	black: 900,
	heavy: 900,
	extrablack: 950,
	ultrablack: 950
}

const otfToTtf = () =>
	gulp
		.src(`${paths.srcFolder}/fonts/*.otf`)
		.pipe(plugins.catchError('FONTS'))
		.pipe(
			fonter({
				formats: ['ttf']
			})
		)
		.pipe(gulp.dest(`${paths.srcFolder}/fonts/`))

const ttfToWoff = () =>
	gulp
		.src(`${paths.srcFolder}/fonts/*.ttf`)
		.pipe(plugins.catchError('FONTS'))
		.pipe(ttf2woff2())
		.pipe(gulp.dest(paths.build.fonts))
		.pipe(gulp.src(`${paths.srcFolder}/fonts/*.woff2`))
		.pipe(gulp.dest(paths.build.fonts))

const fontsStyles = () => {
	plugins.fs.readdir(paths.build.fonts, (error, fontFiles) => {
		if (fontFiles) {
			if (!plugins.fs.existsSync(paths.fontStylesFile)) {
				let newFileOnly

				plugins.fs.writeFile(paths.fontStylesFile, '', cb)
				fontFiles.forEach(file => {
					const fileName = file.split('.')[0]

					if (newFileOnly !== fileName) {
						const italic = (/italic/gi)
						const variableFont = (/var/gi)
						const [fontName, fontWeight = 'regular'] = fileName.split('-')
						const fontWeightValue
							= fontWeights[fontWeight.toLowerCase().replace(italic, '')]
						const fontStyle = fileName.match(italic) ? 'italic' : 'normal'

						if (fileName.match(variableFont)) {
							plugins.fs.appendFile(
								paths.fontStylesFile,
								`@font-face {\n\tsrc: url("../fonts/${fileName}.woff2") format("woff2-variations");\n\tfont-family: "${fontName}";\n\tfont-weight: 100 1000;\n\tfont-display: swap;\n}\n\n`,
								cb
							)
						} else {
							plugins.fs.appendFile(
								paths.fontStylesFile,
								`@font-face {\n\tsrc: url("../fonts/${fileName}.woff2") format("woff2");\n\tfont-family: "${fontName}";\n\tfont-weight: ${fontWeightValue};\n\tfont-style: ${fontStyle};\n\tfont-display: swap;\n}\n\n`,
								cb
							)
						}

						newFileOnly = fileName
					}
				})
				console.log(
					plugins.chalk.green.bold('(font-face.scss) successfully written')
				)
			} else {
				console.log(plugins.chalk.yellow.bold(`(font-face.scss) already exists`))
			}
		} else {
			console.log(plugins.chalk.red.bold('No font file in fonts directory\n'), error)
		}
	})

	return gulp.src(paths.srcFolder)
}

export { fontsStyles, ttfToWoff, otfToTtf }
