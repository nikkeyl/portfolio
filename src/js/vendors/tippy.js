import tippy from 'tippy.js';

import '@scss/vendors/tippy';

const left = 0;
const top = 10;

tippy('[data-tippy-content]', {
	animation: 'rise',
	delay: 80,
	offset: [left, top],
	placement: 'bottom',
	role: 'tooltip',
});
// disable in js on phone but in css
// tips.hide(500)
