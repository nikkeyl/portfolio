import { paths } from '../../settings/paths.js'
import { plugins } from '../../settings/plugins.js'

import { italicRegex } from '../../helpers/regExpList.js'

import { fontFaceTemplate } from './fontFaceTemplate.js'

const {
	fontFacesFile,
	build: { fonts: fontsSrc }
} = paths
const {
	notifier,
	fs: {
		existsSync,
		promises: { appendFile, readdir, writeFile }
	}
} = plugins

const fontsStyles = async (update) => {
	const taskName = 'fontsStyles'

	if (existsSync(fontFacesFile) && !update) {
		return notifier.warning(taskName, {
			path: fontFacesFile,
			// слишком длинное сообщение
			info: "The (font-face.scss) file already exists, to update it, run 'npm run fonts --update'"
		})
	}

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

	try {
		const updateFlag = update ? 'Update' : 'Added'
		const fontsFolder = await readdir(fontsSrc)

		let newFileOnly

		await writeFile(fontFacesFile, '')

		for (const fontFile of fontsFolder) {
			const [fileName] = fontFile.split('.')

			if (newFileOnly !== fileName) {
				const [fontFamily, fontWeightValue = 'regular'] = fileName.split('-')
				const fontWeight =
					fontWeights[fontWeightValue.replace(italicRegex, '').toLowerCase()]
				const fontStyle = italicRegex.test(fileName) ? 'italic' : 'normal'

				// await-in-loop: FIX
				await appendFile(
					fontFacesFile,
					// очень много аргументов
					fontFaceTemplate(fileName, fontFamily, fontWeight, fontStyle)
				)

				newFileOnly = fileName
			}
		}

		return notifier.success(taskName, {
			path: fontFacesFile,
			info: updateFlag
		})
	} catch (error) {
		return notifier.error(taskName, {
			path: fontFacesFile,
			info: error
		})
	}
}

export { fontsStyles }
