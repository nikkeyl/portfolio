const slideDown = (target, duration = 500) => {
	if (!target.classList.contains('slide')) {
		target.classList.add('slide');
		target.hidden = target.hidden ? false : null;

		const height = target.offsetHeight;

		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingBlock = 0;
		target.style.marginBlock = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = `${duration}ms`;
		target.style.height = `${height}px`;
		target.style.removeProperty('padding-block');
		target.style.removeProperty('margin-block');

		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('slide');
		}, duration);
	}
};

export default slideDown;
