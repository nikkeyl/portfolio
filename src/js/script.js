document.addEventListener('click', e => {
	if (e.target.closest('[aria-disabled]')) {
		e.preventDefault()
	}
})
