class Cookie {

	static getInstance() {
		Cookie.instance = new Cookie();
		return Cookie.instance;
	}

	constructor() {
		// console.log(Cookies);
	}

	getList(callback = () => {}) {
		const lists = (Cookies.get()) ? Cookies.get() : [];
		let res = [];
		angular.forEach(lists, (value, key) => {
			res.push({ key: key, value: value });
		});
		callback(res);
	}

	get(key, callback = () => {}) {
		if (!key) {
			callback(null);
			return;
		}
		const res = (Cookies.get(key)) ? Cookies.get(key) : null;
		callback(res);
	}

	put(key, value, expire, callback = () => {}) {
		if (!key || !value) {
			callback(false);
			return;
		}
		Cookies.set(key, value, {
			expires: (expire) ? expire : 1,
			path: '/',
		});
		callback(true);
	}

	remove(key, callback = () => {}) {
		if (!key) {
			callback(false);
			return;
		}
		Cookies.remove(key, {
			path: '/',
		});
		callback(true);
	}
}

app.factory('Cookie', Cookie.getInstance);