import SimpleBar from 'simplebar'

import '@scss/vendors/simplebar'

document.querySelectorAll('[data-simplebar]').forEach(scrollBlock => {
	new SimpleBar(scrollBlock, {
		scrollBarMinSize: 100,
		autoHide: false
	})
})
