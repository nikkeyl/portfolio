import Marquee from 'vanilla-marquee'

new Marquee(document.querySelector('[role="marquee"]'), {
	css3easing: 'linear',
	direction: 'left',
	duplicated: true,
	speed: 70,
	gap: 20,
	pauseOnHover: true,
	startVisible: true
})
