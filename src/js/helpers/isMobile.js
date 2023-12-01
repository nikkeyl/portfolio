const isMobile = {
	blackBerry: () => {
		return navigator.userAgent.match(/blackberry/i);
	},
	ios: () => {
		return navigator.userAgent.match(/iphone|ipad|ipod/i);
	},
	opera: () => {
		return navigator.userAgent.match(/opera mini/i);
	},
	android: () => {
		return navigator.userAgent.match(/android/i);
	},
	any: () => {
		return (
			isMobile.blackBerry() ??
			isMobile.android() ??
			isMobile.opera() ??
			isMobile.ios()
		);
	}
};

export default isMobile;
