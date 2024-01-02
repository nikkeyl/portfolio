import slideToggle from '@js/helpers/slideToggle';
import slideUp from '@js/helpers/slideUp';

const spoilers = () => {
	const spoilersInitClass = 'spoiler-init';
	const spoilersActiveClass = 'spoiler-active';
	const spoilersAttribute = 'data-spoilers';
	const detailsElement = 'details'
	const summaryElement = 'summary'
	const spoilers = document.querySelectorAll(`[${spoilersAttribute}]`);
	const spoilersRegular = Array.from(spoilers).filter((item) => {
		return !item.dataset.spoilers.split(',')[0];
	});
	const defaultSpeed = 500;

	const initSpoilerBody = (spoilersParent, isHideSpoilerBody = true) => {
		const spoilerItemsArray = spoilersParent.querySelectorAll(detailsElement);

		spoilerItemsArray.forEach((spoilerItem) => {
			const spoilerTrigger = spoilerItem.querySelector(summaryElement);

			if (isHideSpoilerBody) {
				spoilerTrigger.removeAttribute('tabindex');

				if (!spoilerItem.hasAttribute('data-open')) {
					spoilerItem.open = false;
					spoilerTrigger.nextElementSibling.hidden = true;
				} else {
					spoilerTrigger.classList.add(spoilersActiveClass);
					spoilerItem.open = true;
				}
			} else {
				spoilerTrigger.setAttribute('tabindex', '-1');
				spoilerTrigger.classList.remove(spoilersActiveClass);
				spoilerItem.open = true;
				spoilerTrigger.nextElementSibling.hidden = false;
			}
		});
	};

	const initSpoilers = (spoilersArray, isMatchMedia = false) => {
		spoilersArray.forEach((spoilersParent) => {
			spoilersParent = isMatchMedia ? spoilersParent.item : spoilersParent;

			if (isMatchMedia.matches ?? !isMatchMedia) {
				spoilersParent.classList.add(spoilersInitClass);
				initSpoilerBody(spoilersParent);
			} else {
				spoilersParent.classList.remove(spoilersInitClass);
				initSpoilerBody(spoilersParent, false);
			}
		});
	};

	const hideSpoilersBody = (spoilersParent) => {
		const spoilerActiveBlock = spoilersParent.querySelector(`${detailsElement}[open]`);

		if (spoilerActiveBlock && !spoilersParent.querySelectorAll('.slide').length) {
			const spoilerActiveTrigger = spoilerActiveBlock.querySelector(summaryElement);

			spoilerActiveTrigger.classList.remove(spoilersActiveClass);
			slideUp(spoilerActiveTrigger.nextElementSibling);
			setTimeout(() => {
				spoilerActiveBlock.open = false;
			}, defaultSpeed);
		}
	};

	const setSpoilerAction = (event) => {
		const targetElement = event.target;

		if (targetElement.closest(detailsElement)) {
			event.preventDefault();
		}

		if (
			targetElement.closest(summaryElement) &&
			targetElement.closest(`[${spoilersAttribute}]`) &&
			targetElement
				.closest(`[${spoilersAttribute}]`)
				.classList.contains(spoilersInitClass)
		) {
			const spoilerTrigger = targetElement.closest(summaryElement);
			const spoilerParent = spoilerTrigger.closest(detailsElement);
			const spoilersParent = spoilerTrigger.closest(`[${spoilersAttribute}]`);
			const onlyOneSpoiler = spoilersParent.hasAttribute('data-one-spoiler');

			if (!spoilersParent.querySelectorAll('.slide').length) {
				if (onlyOneSpoiler && !spoilerParent.open) {
					hideSpoilersBody(spoilersParent);
				}

				if (!spoilerParent.open) {
					spoilerParent.open = true
				} else {
					setTimeout(() => {
						spoilerParent.open = false;
					}, defaultSpeed);
				}

				spoilerTrigger.classList.toggle(spoilersActiveClass);
				slideToggle(spoilerTrigger.nextElementSibling);
			}
		}

		if (!targetElement.closest(`[${spoilersAttribute}]`)) {
			const spoilersClose = document.querySelectorAll('[data-spoiler-close]');

			spoilersClose.forEach((spoilerClose) => {
				const spoilersParent = spoilerClose.closest(`[${spoilersAttribute}]`);
				const spoilerCloseBlock = spoilerClose.parentNode;

				if (spoilersParent.classList.contains(spoilersInitClass)) {
					spoilerClose.classList.remove(spoilersActiveClass);

					slideUp(spoilerClose.nextElementSibling);

					setTimeout(() => {
						spoilerCloseBlock.open = false;
					}, defaultSpeed);
				}
			});
		}
	};

	document.addEventListener('click', setSpoilerAction);

	initSpoilers(spoilersRegular);
};

export default spoilers;
