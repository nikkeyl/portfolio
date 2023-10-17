import { html } from '../helpers/nodeList'

const eventsCalendar = (eventName) => {
	const eventsDates = {
		halloween: ['1017', '1031']
	}
	const eventDate = new Date()
	const month = eventDate.getMonth()
	const day = eventDate.getDate()
	const eventCurrentDate = +`${month + 1}${day}`

	const halloweenStart = eventsDates.halloween[0]
	const halloweenEnd = eventsDates.halloween[1]

	if (eventCurrentDate >= halloweenStart && eventCurrentDate <= halloweenEnd) {
		if (eventName === 'Halloween') {
			return html.classList.add('halloween')
		}
	}
}

eventsCalendar('Halloween')

export default eventsCalendar;
