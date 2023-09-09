import { slideToggle } from '@js/helpers/slideToggle'
import { slideUp } from '@js/helpers/slideUp'

const spoilers = () => {
	const spoilersInitClass = 'spoiler-init'
	const spoilersActiveClass = 'spoiler-active'
	const spoilersAttribute = 'data-spoilers'
	const spoilersArray = document.querySelectorAll(`[${spoilersAttribute}]`)
	const spoilersRegular = Array.from(spoilersArray).filter((item) => {
		return !item.dataset.spoilers.split(',')[0]
	})
	const defaultSpeed = 500

	const initSpoilerBody = (spoilersBlock, hideSpoilerBody = true) => {
		const spoilerItemsArray = spoilersBlock.querySelectorAll('details')

		spoilerItemsArray.forEach((spoilerItem) => {
			const spoilerTrigger = spoilerItem.querySelector('summary')

			if (hideSpoilerBody) {
				spoilerTrigger.removeAttribute('tabindex')

				if (!spoilerItem.hasAttribute('data-open')) {
					spoilerItem.open = false
					spoilerTrigger.nextElementSibling.hidden = true
				} else {
					spoilerTrigger.classList.add(spoilersActiveClass)
					spoilerItem.open = true
				}
			} else {
				spoilerTrigger.setAttribute('tabindex', '-1')
				spoilerTrigger.classList.remove(spoilersActiveClass)
				spoilerItem.open = true
				spoilerTrigger.nextElementSibling.hidden = false
			}
		})
	}

	const initSpoilers = (spoilersArray, matchMedia = false) => {
		spoilersArray.forEach((spoilersBlock) => {
			spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock

			if (matchMedia.matches || !matchMedia) {
				spoilersBlock.classList.add(spoilersInitClass)
				initSpoilerBody(spoilersBlock)
			} else {
				spoilersBlock.classList.remove(spoilersInitClass)
				initSpoilerBody(spoilersBlock, false)
			}
		})
	}

	const hideSpoilersBody = (spoilersBlock) => {
		const spoilerActiveBlock = spoilersBlock.querySelector('details[open]')

		if (spoilerActiveBlock && !spoilersBlock.querySelectorAll('.slide').length) {
			const spoilerActiveTrigger = spoilerActiveBlock.querySelector('summary')
			const spoilerSpeed =
				parseInt(spoilersBlock.dataset.spoilersSpeed) || defaultSpeed

			spoilerActiveTrigger.classList.remove(spoilersActiveClass)
			slideUp(spoilerActiveTrigger.nextElementSibling, spoilerSpeed)
			setTimeout(() => {
				spoilerActiveBlock.open = false
			}, spoilerSpeed)
		}
	}

	const setSpoilerAction = (event) => {
		const targetElement = event.target

		if (targetElement.closest('details')) {
			event.preventDefault()
		}

		if (
			targetElement.closest('summary') &&
			targetElement.closest(`[${spoilersAttribute}]`) &&
			targetElement
				.closest(`[${spoilersAttribute}]`)
				.classList.contains(spoilersInitClass)
		) {
			const spoilerTrigger = targetElement.closest('summary')
			const spoilerBlock = spoilerTrigger.closest('details')
			const spoilersBlock = spoilerTrigger.closest(`[${spoilersAttribute}]`)
			const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler')
			const spoilerSpeed =
				parseInt(spoilersBlock.dataset.spoilersSpeed) || defaultSpeed

			if (!spoilersBlock.querySelectorAll('.slide').length) {
				if (oneSpoiler && !spoilerBlock.open) {
					hideSpoilersBody(spoilersBlock)
				}

				!spoilerBlock.open
					? (spoilerBlock.open = true)
					: setTimeout(() => {
							spoilerBlock.open = false
					  }, spoilerSpeed)

				spoilerTrigger.classList.toggle(spoilersActiveClass)
				slideToggle(spoilerTrigger.nextElementSibling, spoilerSpeed)
			}
		}

		if (!targetElement.closest(`[${spoilersAttribute}]`)) {
			const spoilersClose = document.querySelectorAll('[data-spoiler-close]')

			spoilersClose.forEach((spoilerClose) => {
				const spoilersBlock = spoilerClose.closest(`[${spoilersAttribute}]`)
				const spoilerCloseBlock = spoilerClose.parentNode

				if (spoilersBlock.classList.contains(spoilersInitClass)) {
					const defaultSpeed = 500
					const spoilerSpeed =
						parseInt(spoilersBlock.dataset.spoilersSpeed) || defaultSpeed

					spoilerClose.classList.remove(spoilersActiveClass)

					slideUp(spoilerClose.nextElementSibling, spoilerSpeed)

					setTimeout(() => {
						spoilerCloseBlock.open = false
					}, spoilerSpeed)
				}
			})
		}
	}

	document.addEventListener('click', setSpoilerAction)

	if (spoilersRegular.length) {
		initSpoilers(spoilersRegular)
	}
}

export { spoilers }
