document.addEventListener('click', e => {
	if (e.target.closest('[tabindex="-1"]')) {
		e.preventDefault()
	}
})
