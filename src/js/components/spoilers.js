import { slideToggle } from '@js/helpers/slideToggle'
import { slideUp } from '@js/helpers/slideUp'

function spoilers() {
	const spoilersArray = document.querySelectorAll('[data-spoilers]')

	document.addEventListener('click', setSpoilerAction)
	const spoilers = Array.from(spoilersArray).filter(
		(item) => !item.dataset.spoilers.split(',')[0]
	)

	initSpoilers(spoilers)

	function initSpoilers(spoilersArray, matchMedia = false) {
		spoilersArray.forEach((spoilersBlock) => {
			spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock

			if (matchMedia.matches || !matchMedia) {
				spoilersBlock.classList.add('spoiler-init')
				initSpoilerBody(spoilersBlock)
			} else {
				spoilersBlock.classList.remove('spoiler-init')
				initSpoilerBody(spoilersBlock, false)
			}
		})
	}

	function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
		let spoilerItems = spoilersBlock.querySelectorAll('details')

		spoilerItems = Array.from(spoilerItems).filter(
			(item) => item.closest('[data-spoilers]') === spoilersBlock
		)
		spoilerItems.forEach((spoilerItem) => {
			const spoilerTrigger = spoilerItem.querySelector('summary')

			if (hideSpoilerBody) {
				spoilerTrigger.removeAttribute('tabindex')

				if (!spoilerItem.hasAttribute('data-open')) {
					spoilerItem.open = false
					spoilerTrigger.nextElementSibling.hidden = true
				} else {
					spoilerTrigger.classList.add('spoiler-active')
					spoilerItem.open = true
				}
			} else {
				spoilerTrigger.setAttribute('tabindex', '-1')
				spoilerTrigger.classList.remove('spoiler-active')
				spoilerItem.open = true
				spoilerTrigger.nextElementSibling.hidden = false
			}
		})
	}

	function setSpoilerAction(e) {
		const el = e.target

		el.closest('details') ? e.preventDefault() : null

		if (el.closest('summary') && el.closest('[data-spoilers]')) {
			if (el.closest('[data-spoilers]').classList.contains('spoiler-init')) {
				const spoilerTrigger = el.closest('summary')
				const spoilerBlock = spoilerTrigger.closest('details')
				const spoilersBlock = spoilerTrigger.closest('[data-spoilers]')
				const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler')
				const spoilerSpeed = parseInt(spoilersBlock.dataset.spoilersSpeed) || 500

				if (!spoilersBlock.querySelectorAll('.slide').length) {
					oneSpoiler && !spoilerBlock.open ? hideSpoilersBody(spoilersBlock) : null

					!spoilerBlock.open
						? (spoilerBlock.open = true)
						: setTimeout(() => {
								spoilerBlock.open = false
						  }, spoilerSpeed)

					spoilerTrigger.classList.toggle('spoiler-active')
					slideToggle(spoilerTrigger.nextElementSibling, spoilerSpeed)
				}
			}
		}

		if (!el.closest('[data-spoilers]')) {
			const spoilersClose = document.querySelectorAll('[data-spoiler-close]')

			spoilersClose.forEach((spoilerClose) => {
				const spoilersBlock = spoilerClose.closest('[data-spoilers]')
				const spoilerCloseBlock = spoilerClose.parentNode

				if (spoilersBlock.classList.contains('spoiler-init')) {
					const spoilerSpeed = parseInt(spoilersBlock.dataset.spoilersSpeed) || 500

					spoilerClose.classList.remove('spoiler-active')
					slideUp(spoilerClose.nextElementSibling, spoilerSpeed)
					setTimeout(() => {
						spoilerCloseBlock.open = false
					}, spoilerSpeed)
				}
			})
		}
	}

	function hideSpoilersBody(spoilersBlock) {
		const spoilerActiveBlock = spoilersBlock.querySelector('details[open]')

		if (spoilerActiveBlock && !spoilersBlock.querySelectorAll('.slide').length) {
			const spoilerActiveTrigger = spoilerActiveBlock.querySelector('summary')
			const spoilerSpeed = parseInt(spoilersBlock.dataset.spoilersSpeed) || 500

			spoilerActiveTrigger.classList.remove('spoiler-active')
			slideUp(spoilerActiveTrigger.nextElementSibling, spoilerSpeed)
			setTimeout(() => {
				spoilerActiveBlock.open = false
			}, spoilerSpeed)
		}
	}
}

export { spoilers }
