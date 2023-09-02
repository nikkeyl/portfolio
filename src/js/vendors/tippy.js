import tippy from 'tippy.js'

import '@scss/vendors/tippy'

tippy('[data-tippy-content]', {
	animation: 'rise',
	delay: 80,
	offset: [0, 5],
	placement: 'bottom',
	role: 'tooltip'
})
