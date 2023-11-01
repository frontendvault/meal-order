export const debounce = (func, wait = 500) => {
	let timer;

	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, wait);
	};
};
