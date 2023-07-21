/*!
 * Creeping line (Marquee plugin)
 * https://mattiacoll.github.io/vanilla-marquee-site/
 */
import Marquee from 'vanilla-marquee'

if (document.querySelector('[data-marquee]')) {
	const elem = document.querySelector('[data-marquee]')

	new Marquee(elem, {
		css3easing: 'linear',
		direction: 'left',
		duplicated: true,
		speed: 70,
		gap: 20,
		pauseOnHover: true,
		startVisible: true
	})
}
