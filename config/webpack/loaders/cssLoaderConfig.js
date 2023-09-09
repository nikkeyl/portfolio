const cssLoaderConfig = (options = {}) => {
	const { importLoaders = 0, sourceMap = false, endPath = '' } = options

	return {
		importLoaders: importLoaders,
		sourceMap: sourceMap,
		modules: false,
		url: {
			filter: (url) => {
				!url.includes(`img${endPath}`) || !url.includes(`fonts${endPath}`)
			}
		}
	}
}

export { cssLoaderConfig }
