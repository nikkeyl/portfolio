import { bodyLockStatus, bodyUnlock, bodyLock } from '@js/helpers/bodyLockToggle'
import { nodeObjects, html } from '@js/helpers/nodeList'

class Popup {
	constructor(options) {
		const config = {
			init: true,
			attributeOpenButton: 'data-popup',
			attributeCloseButton: 'data-close',
			classes: {
				popup: 'popup',
				popupContent: 'popup__content',
				popupActive: 'popup--show',
				overlayShow: 'overlay-show'
			},
			focusCatch: true,
			closeEsc: true,
			bodyLock: true
		}

		this.isOpen = false
		this.targetOpen = {
			selector: false,
			element: false
		}
		this.previousOpen = {
			selector: false,
			element: false
		}
		this.lastClosed = {
			selector: false,
			element: false
		}
		this.dataValue = false
		this.hash = false
		this.reopen = false
		this.selectorOpen = false
		this.lastFocusEl = false
		this.focusEl = ['a[href]']
		this.options = {
			...config,
			...options,
			classes: {
				...config.classes,
				...options?.classes
			},
			on: {
				...config.on,
				...options?.on
			}
		}
		this.bodyLock = false
		this.options.init ? this.initPopups() : null
	}

	initPopups() {
		this.eventsPopup()
	}

	eventsPopup() {
		document.addEventListener(
			'click',
			function (e) {
				const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`)

				if (buttonOpen) {
					e.preventDefault()
					this.dataValue =
						buttonOpen?.getAttribute(this.options.attributeOpenButton) || 'error'

					if (this.dataValue !== 'error') {
						if (!this.isOpen) {
							this.lastFocusEl = buttonOpen
						}

						this.targetOpen.selector = `${this.dataValue}`
						this.selectorOpen = true
						this.open()

						return
					}

					return
				}

				const buttonClose = e.target.closest(
					`[${this.options.attributeCloseButton}]`
				)

				if (
					buttonClose ||
					(!e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen)
				) {
					e.preventDefault()
					this.close()

					return
				}
			}.bind(this)
		)

		document.addEventListener(
			'keydown',
			function (e) {
				if (
					this.options.closeEsc &&
					e.which === 27 &&
					e.code === 'Escape' &&
					this.isOpen
				) {
					e.preventDefault()
					this.close()

					return
				}

				if (this.options.focusCatch && e.which === 9 && this.isOpen) {
					this.focusCatch(e)

					return
				}
			}.bind(this)
		)
	}

	open(selectorValue) {
		if (bodyLockStatus) {
			this.bodyLock = html.classList.contains('lock') && !this.isOpen ? true : false

			if (
				selectorValue &&
				typeof selectorValue === 'string' &&
				selectorValue.trim() !== ''
			) {
				this.targetOpen.selector = selectorValue
				this.selectorOpen = true
			}

			if (this.isOpen) {
				this.reopen = true
				this.close()
			}

			if (!this.selectorOpen) {
				this.targetOpen.selector = this.lastClosed.selector
			}

			if (!this.reopen) {
				this.previousActiveElement = document.activeElement
			}

			this.targetOpen.element = document.querySelector(this.targetOpen.selector)

			if (this.targetOpen.element) {
				this.targetOpen.element.classList.add(this.options.classes.popupActive)

				html.classList.add(this.options.classes.overlayShow)

				if (!this.reopen) {
					!this.bodyLock ? bodyLock() : null
				} else {
					this.reopen = false
				}

				this.targetOpen.element.setAttribute('aria-hidden', 'false')
				this.previousOpen.selector = this.targetOpen.selector
				this.previousOpen.element = this.targetOpen.element
				this.selectorOpen = false
				this.isOpen = true

				setTimeout(() => {
					this.focusTrap()
				}, 50)
			}
		}
	}

	close(selectorValue) {
		if (
			selectorValue &&
			typeof selectorValue === 'string' &&
			selectorValue.trim() !== ''
		) {
			this.previousOpen.selector = selectorValue
		}

		if (!this.isOpen || !bodyLockStatus) {
			return
		}

		this.previousOpen.element.classList.remove(this.options.classes.popupActive)
		this.previousOpen.element.setAttribute('aria-hidden', 'true')

		if (!this.reopen) {
			html.classList.remove(this.options.classes.overlayShow)
			!this.bodyLock ? bodyUnlock() : null
			this.isOpen = false
		}

		if (this.selectorOpen) {
			this.lastClosed.selector = this.previousOpen.selector
			this.lastClosed.element = this.previousOpen.element
		}

		setTimeout(() => {
			this.focusTrap()
		}, 50)
	}

	focusCatch(e) {
		const focusable = this.targetOpen.element.querySelectorAll(this.focusEl)
		const focusArray = Array.prototype.slice.call(focusable)
		const focusedIndex = focusArray.indexOf(document.activeElement)

		if (e.shiftKey && focusedIndex === 0) {
			focusArray[focusArray.length - 1].focus()
			e.preventDefault()
		}

		if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
			focusArray[0].focus()
			e.preventDefault()
		}
	}

	focusTrap() {
		const focusable = this.previousOpen.element.querySelectorAll(this.focusEl)

		!this.isOpen && this.lastFocusEl
			? this.lastFocusEl.focus()
			: focusable[0].focus()
	}
}

nodeObjects.popup = new Popup({})
