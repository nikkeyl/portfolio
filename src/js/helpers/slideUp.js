const slideUp = (target, duration = 500, showMore = 0) => {
	if (!target.classList.contains('slide')) {
		target.classList.add('slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = `${duration}ms`;
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = `${showMore}px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;

		window.setTimeout(() => {
			target.hidden = !showMore;

			if (target.hidden) {
				target.style.removeProperty('height');
			}

			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');

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
