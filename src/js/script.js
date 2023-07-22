document.addEventListener('click', e => {
	if (e.target.closest('a.disabled')) {
		e.preventDefault()
	}
})
