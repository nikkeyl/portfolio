document.addEventListener('click', e => {
	if (e.target.closest('[disabled]')) {
		e.preventDefault()
	}
})
