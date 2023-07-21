import { goToBlock } from '@js/helpers/goToBlock'
import { getHash } from '@js/helpers/getHash'

function pageNavigation() {
	document.addEventListener('click', pageNavigationAction)
	document.addEventListener('watcherCallback', pageNavigationAction)

	function pageNavigationAction(e) {
		if (e.type === 'click') {
			const targetElement = e.target

			if (targetElement.closest('[data-goto]')) {
				const gotoLink = targetElement.closest('[data-goto]')
				const gotoLinkSelector = gotoLink.dataset.goto || ''
				const noHeader = gotoLink.hasAttribute('data-goto-header')
				const offsetTop = parseInt(gotoLink.dataset.gotoTop) || 0

				goToBlock(gotoLinkSelector, noHeader, offsetTop)
				e.preventDefault()
			}
		}
	}

	if (getHash()) {
		let goToHash

		document.querySelector(`#${getHash()}`)
			? (goToHash = `#${getHash()}`)
			: (goToHash = `.${getHash()}`)
		goToHash ? goToBlock(goToHash, true, 20) : null
	}
}

export { pageNavigation }
