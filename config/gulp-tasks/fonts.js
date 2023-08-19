import gulp from 'gulp'

import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import ttf2woff2 from 'gulp-ttf2woff2'
import fonter from 'gulp-fonter-fix'

const fontFacesFile = paths.fontStylesFile
const variableFont = /(?:_|__|-|\s)?(var)/i
const italicRegex = /(?:_|__|-|\s)?(italic)/i
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

const fontFaceTemplate = (
	fontName,
	fileName,
	fontWeight,
	fontStyle,
	variableFont
) => {
	if (variableFont) {
		return `@font-face {\n\tsrc: url("../fonts/${fileName}.woff2") format("woff2-variations");\n\tfont-family: "${fontName}";\n\tfont-weight: 100 1000;\n\tfont-display: swap;\n}\n\n`
	} else {
		return `@font-face {\n\tsrc: url("../fonts/${fileName}.woff2") format("woff2");\n\tfont-family: "${fontName}";\n\tfont-weight: ${fontWeight};\n\tfont-style: ${fontStyle};\n\tfont-display: swap;\n}\n\n`
	}
}

const otfToTtf = () => {
	return gulp
		.src(`${paths.src.fonts}*.otf`)
		.pipe(plugins.catchError('FONTS [otfToTtf]'))
		.pipe(
			fonter({
				formats: ['ttf']
			})
		)
		.pipe(gulp.dest(paths.src.fonts))
}

const ttfToWoff = () => {
	if (plugins.fs.existsSync(fontFacesFile)) {
		return gulp
			.src(`${paths.src.fonts}*.woff2`)
			.pipe(plugins.catchError('FONTS [ttfToWoff]'))
			.pipe(gulp.dest(paths.build.fonts))
	}

	return gulp
		.src(`${paths.src.fonts}*.ttf`)
		.pipe(plugins.catchError('FONTS [ttfToWoff]'))
		.pipe(ttf2woff2())
		.pipe(gulp.dest(paths.src.fonts))
		.pipe(gulp.src(`${paths.src.fonts}*.woff2`))
		.pipe(gulp.dest(paths.build.fonts))
}

const fontsStyles = async () => {
	try {
		if (plugins.fs.existsSync(fontFacesFile)) {
			console.log(plugins.chalk.bgYellow.white.bold('(font-face.scss) already exists'))

			return
		}

		const fontFiles = await plugins.fs.promises.readdir(paths.build.fonts)

		if (!fontFiles) {
			console.log(plugins.chalk.bgRed.white.bold('No fonts files'))

			return
		}

		await plugins.fs.promises.writeFile(fontFacesFile, '')

		let newFileOnly

		for (const file of fontFiles) {
			const [fileName] = file.split('.')

			if (newFileOnly !== fileName) {
				const [fontName, fontWeight = 'regular'] = fileName.split('-')
				const fontWeightValue =
					fontWeights[fontWeight.replace(italicRegex, '').toLowerCase()]
				const fontStyle = italicRegex.test(fileName) ? 'italic' : 'normal'

				await plugins.fs.promises.appendFile(
					fontFacesFile,
					fontFaceTemplate(
						fontName,
						fileName,
						fontWeightValue,
						fontStyle,
						variableFont.test(fileName)
					)
				)

				newFileOnly = fileName
			}
		}

		console.log(plugins.chalk.bgGreen.white.bold('(font-face.scss) successfully written'))
	} catch (error) {
		console.log(plugins.chalk.bgRed.white.bold('Error processing fonts\n'), error)
	}
}

export { otfToTtf, ttfToWoff, fontsStyles }
