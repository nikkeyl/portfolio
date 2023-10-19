import { html, body, lockPaddings } from '@js/helpers/nodeList';

let isBodyLockStatus = true;

const delayToggle = (delay = 500) => {
	isBodyLockStatus = false;
	setTimeout(() => {
		isBodyLockStatus = true;
	}, delay);
};

const bodyUnlock = (delay) => {
	if (isBodyLockStatus) {
		for (const elem of lockPaddings) {
			elem.style.paddingRight = 0;
		}

		body.style.paddingRight = 0;
		html.classList.remove('lock');

		delayToggle(delay);
	}
};
const bodyLock = (delay) => {
	const paddingRight =
		window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (isBodyLockStatus) {
		for (const elem of lockPaddings) {
			elem.style.paddingRight = paddingRight;
		}

		body.style.paddingRight = paddingRight;
		html.classList.add('lock');

		delayToggle(delay);
	}
};

const bodyLockToggle = (delay) => {
	html.classList.contains('lock') ? bodyUnlock(delay) : bodyLock(delay);
};

export { isBodyLockStatus, bodyLockToggle, bodyUnlock, bodyLock };
