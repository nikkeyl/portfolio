import { isBodyLockStatus, bodyUnlock, bodyLock } from '@js/helpers/bodyLockToggle';
import { html } from '@js/helpers/nodeList';

class Popup {
	constructor() {
		const config = {
			attributeOpenButton: 'data-popup',
			attributeCloseButton: 'data-close',
			classes: {
				popup: 'popup',
				popupContent: 'popup__content',
				popupActive: 'popup--show',
				overlayShow: 'overlay-show'
			},
			isCloseEsc: true,
			isBodyLock: true
		};

		this.isOpen = false;
		this.targetOpen = {
			selector: false,
			element: false
		};
		this.previousOpen = {
			selector: false,
			element: false
		};
		this.lastClosed = {
			selector: false,
			element: false
		};
		this.dataValue = false;
		this.reopen = false;
		this.selectorOpen = false;
		this.lastFocusEl = false;
		this.focusEl = '.popup';
		this.options = {
			...config,
			classes: {
				...config.classes
			},
			on: {
				...config.on
			}
		};
		this.isBodyLock = false;
		this.initPopups();
	}

	initPopups() {
		this.eventsPopup();
	}

	eventsPopup() {
		const escapeKey = 9;

		document.addEventListener('click', (event) => {
			const buttonOpen = event.target.closest(
				`[${this.options.attributeOpenButton}]`
			);

			if (buttonOpen) {
				event.preventDefault();
				this.dataValue =
					buttonOpen?.getAttribute(this.options.attributeOpenButton) ?? 'error';

				if (this.dataValue !== 'error') {
					if (!this.isOpen) {
						this.lastFocusEl = buttonOpen;
					}

					this.targetOpen.selector = this.dataValue;
					this.selectorOpen = true;
					this.open();

					return;
				}

				return;
			}

			const buttonClose = event.target.closest(
				`[${this.options.attributeCloseButton}]`
			);

			if (
				buttonClose ??
				(!event.target.closest(`.${this.options.classes.popupContent}`) &&
					this.isOpen)
			) {
				event.preventDefault();

				return this.close();
			}
		});

		document.addEventListener('keydown', (event) => {
			if (
				this.options.isCloseEsc &&
				event.key === escapeKey &&
				event.code === 'Escape' &&
				this.isOpen
			) {
				event.preventDefault();

				return this.close();
			}
		});
	}

	open(selectorValue) {
		if (isBodyLockStatus) {
			this.isBodyLock = html.classList.contains('lock') && !this.isOpen;

			if (
				selectorValue &&
				typeof selectorValue === 'string' &&
				selectorValue.trim() !== ''
			) {
				this.targetOpen.selector = selectorValue;
				this.selectorOpen = true;
			}

			if (this.isOpen) {
				this.reopen = true;
				this.close();
			}

			if (!this.selectorOpen) {
				this.targetOpen.selector = this.lastClosed.selector;
			}

			if (!this.reopen) {
				this.previousActiveElement = document.activeElement;
			}

			this.targetOpen.element = document.querySelector(this.targetOpen.selector);

			if (this.targetOpen.element) {
				this.targetOpen.element.classList.add(this.options.classes.popupActive);

				html.classList.add(this.options.classes.overlayShow);

				if (!this.reopen) {
					if (!this.isBodyLock) {
						bodyLock();
					}
				} else {
					this.reopen = false;
				}

				this.targetOpen.element.setAttribute('aria-hidden', 'false');
				this.previousOpen.selector = this.targetOpen.selector;
				this.previousOpen.element = this.targetOpen.element;
				this.selectorOpen = false;
				this.isOpen = true;
			}
		}
	}

	close(selectorValue) {
		if (
			selectorValue &&
			typeof selectorValue === 'string' &&
			selectorValue.trim() !== ''
		) {
			this.previousOpen.selector = selectorValue;
		}

		if (!this.isOpen ?? !isBodyLockStatus) {
			return;
		}

		this.previousOpen.element.classList.remove(this.options.classes.popupActive);
		this.previousOpen.element.setAttribute('aria-hidden', 'true');

		if (!this.reopen) {
			html.classList.remove(this.options.classes.overlayShow);

			if (!this.isBodyLock) {
				bodyUnlock();
			}

			this.isOpen = false;
		}

		if (this.selectorOpen) {
			this.lastClosed.selector = this.previousOpen.selector;
			this.lastClosed.element = this.previousOpen.element;
		}
	}
}

export default Popup;
