import ESLintWebpackPlugin from 'eslint-webpack-plugin'
import StylelintWebpackPlugin from 'stylelint-webpack-plugin'

const linters = {
	esLint: new ESLintWebpackPlugin({
		fix: true
	}),
	styleLint: new StylelintWebpackPlugin({
		fix: true
	})
}

export { linters }
