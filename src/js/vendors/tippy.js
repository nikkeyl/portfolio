import tippy from 'tippy.js'

import '@scss/vendors/tippy'

tippy('[data-tippy-content]', {
	offset: [0, 5],
	delay: 100,
	animation: 'rise',
	placement: 'bottom',
	role: 'tooltip'
})
