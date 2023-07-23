import { goToBlock } from '@js/helpers/goToBlock'

function pageNavigation() {
	document.addEventListener('click', pageNavigationAction)

	function pageNavigationAction(e) {
		if (e.type === 'click') {
			const targetElement = e.target

			if (targetElement.closest('[data-goto]')) {
				const gotoLink = targetElement.closest('[data-goto]')
				const gotoLinkSelector = gotoLink.dataset.goto || ''
				const offsetTop = parseInt(gotoLink.dataset.gotoTop) || 0

				goToBlock(gotoLinkSelector, offsetTop)
				e.preventDefault()
			}
		}
	}
}

export { pageNavigation }
