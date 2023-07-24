import LazyLoad from 'vanilla-lazyload'

const lazyMedia = new LazyLoad({
	elements_selector: '[data-src],[data-srcset]',
	class_loaded: 'lazy-loaded',
	use_native: true
})

// lazyMedia.update(); /* Только при ajax подгрузке контента */

export { lazyMedia }
