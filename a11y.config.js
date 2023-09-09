import { paths } from './config/settings/paths.js'

const { binFolder } = paths

const a11yConfig = {
	accessibilityLevel: 'WCAG2AAA',
	force: true,
	reportLevels: {
		error: true,
		warning: true
	},
	reportLocation: binFolder,
	verbose: false
}

export { a11yConfig }
