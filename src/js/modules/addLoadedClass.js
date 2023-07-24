import { html } from '@js/helpers/nodeList'

function addLoadedClass() {
	window.addEventListener('load', html.classList.add('loaded'))

	const preloader = document.querySelector('.preloader')
	const preloaderContainer = document.querySelector('#preloader')

	if (html.classList.contains('loaded')) {
		setInterval(() => {
			preloader.classList.add('hide')
			preloaderContainer.classList.add('hide')
			setTimeout(() => {
				preloader.remove()
				preloaderContainer.remove()
			}, 300)
		}, 300)
	}
}

export { addLoadedClass }
