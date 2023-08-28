import { plugins } from '../../settings/plugins.js'
import { paths } from '../../settings/paths.js'

import { fontFaceTemplate } from './fontFaceTemplate.js'

const { fontFacesFile } = paths
const { notifier, fs } = plugins

const findItalic = /(?:_|__|-|\s)?(italic)/i
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

const fontsStyles = async () => {
	try {
		if (fs.existsSync(fontFacesFile)) {
			return notifier.warning('File (font-face.scss) already exists')
		}

		const fontsFolder = await fs.promises.readdir(paths.build.fonts)

		await fs.promises.writeFile(fontFacesFile, '')

		let newFileOnly

		for (const fontFile of fontsFolder) {
			const [fileName] = fontFile.split('.')

			if (newFileOnly !== fileName) {
				const [fontFamily, fontWeightValue = 'regular'] = fileName.split('-')
				const fontWeight =
					fontWeights[fontWeightValue.replace(findItalic, '').toLowerCase()]
				const fontStyle = findItalic.test(fileName) ? 'italic' : 'normal'

				await fs.promises.appendFile(
					fontFacesFile,
					fontFaceTemplate(fileName, fontFamily, fontWeight, fontStyle)
				)

				newFileOnly = fileName
			}
		}

		notifier.success('File (font-face.scss) written')
	} catch (error) {
		notifier.error(error)
	}
}

export { fontsStyles }
