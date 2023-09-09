const replaceLoaderConfig = (options = {}) => {
	const { startPath } = options

	return {
		flags: 'g',
		replace: `${startPath}img`,
		search: '@img'
	}
}

export { replaceLoaderConfig }
