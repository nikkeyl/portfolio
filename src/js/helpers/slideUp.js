const slideUp = (target, duration = 500, showMore = 0) => {
	if (!target.classList.contains('slide')) {
		target.classList.add('slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = `${duration}ms`;
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = `${showMore}px`;
		target.style.paddingBlock = 0;
		target.style.marginBlock = 0;

		window.setTimeout(() => {
			target.hidden = !showMore;

			if (target.hidden) {
				target.style.removeProperty('height');
			}

			target.style.removeProperty('padding-block');
			target.style.removeProperty('margin-block');

			if (target.hidden) {
				target.style.removeProperty('overflow');
			}

			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('slide');
		}, duration);
	}
};

export default slideUp;
