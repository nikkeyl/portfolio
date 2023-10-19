import isMobile from '@js/helpers/isMobile';

function customCursor() {
	const wrapper = document.documentElement;
	const cursor = document.createElement('div');

	cursor.classList.add('cursor');
	cursor.style.opacity = 0;
	cursor.insertAdjacentHTML('beforeend', `<span class="cursor__pointer"></span>`);
	wrapper.append(cursor);

	const cursorPointer = document.querySelector('.cursor__pointer');
	const cursorPointerStyle = {
		width: cursorPointer.offsetWidth,
		height: cursorPointer.offsetHeight
	};

	function mouseActions(e) {
		if (e.type === 'mouseout') {
			cursor.style.opacity = 0;
		} else if (e.type === 'mousemove') {
			cursor.style.removeProperty('opacity');

			if (
				e.target.closest('button') ||
				e.target.closest('a') ||
				e.target.closest('details') ||
				(window.getComputedStyle(e.target).cursor !== 'none' &&
					window.getComputedStyle(e.target).cursor !== 'default')
			) {
				cursor.classList.add('hover');
			} else {
				cursor.classList.remove('hover');
			}
		} else if (e.type === 'mousedown') {
			cursor.classList.add('active');
		} else if (e.type === 'mouseup') {
			cursor.classList.remove('active');
		}

		cursorPointer
			? (cursorPointer.style.transform = `translate3d(${
					e.clientX - cursorPointerStyle.width / 2
			  }px, ${e.clientY - cursorPointerStyle.height / 2}px, 0)`)
			: null;
	}

	if (wrapper && !isMobile.any()) {
		mouseActions();
	}

	window.addEventListener('mouseup', mouseActions);
	window.addEventListener('mousedown', mouseActions);
	window.addEventListener('mousemove', mouseActions);
	window.addEventListener('mouseout', mouseActions);
}

export { customCursor };
