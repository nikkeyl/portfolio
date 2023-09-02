import { html } from '@js/helpers/nodeList'

const colorScheme = () => {
	const saveUserTheme = localStorage.getItem('user-theme')

	let userTheme

	if (window.matchMedia) {
		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	}

	const changeTheme = (saveTheme = false) => {
		const currentTheme = html.classList.contains('light') ? 'light' : 'dark'

		let newTheme

		currentTheme === 'light' ? (newTheme = 'dark') : (newTheme = 'light')
		html.classList.remove(currentTheme)
		html.classList.add(newTheme)
		saveTheme ? localStorage.setItem('user-theme', newTheme) : null
	}

	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', () => {
			!saveUserTheme ? changeTheme() : null
		})

	const switchThemeButton = document.querySelector('.theme-switch')

	if (switchThemeButton) {
		switchThemeButton.addEventListener('click', () => {
			changeTheme(true)
		})
	}

	const setThemeClass = () => {
		saveUserTheme ? html.classList.add(saveUserTheme) : html.classList.add(userTheme)
	}

	setThemeClass()
}

export { colorScheme }
