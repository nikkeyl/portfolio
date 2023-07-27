/*! Slider (Swiper plugin) https://swiperjs.com/ */
import Swiper from 'swiper'
import { Pagination, Keyboard, A11y } from 'swiper/modules'

import '@scss/vendors/swiper'

function initSliders() {
	if (document.querySelector('.reviews__slider')) {
		new Swiper('.reviews__slider', {
			modules: [Pagination, Keyboard, A11y],
			observer: true,
			observeParents: true,
			centeredSlides: true,
			spaceBetween: 20,
			speed: 800,
			grabCursor: true,
			simulateTouch: true,

			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},

			keyboard: {
				enabled: true,
				pageUpDown: true
			},

			a11y: true,

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 2
				},
				992: {
					slidesPerView: 3
				}
			}
		})
	}
}

window.addEventListener('load', initSliders)
