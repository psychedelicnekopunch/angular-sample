class NgCookie {

	static getInstance($cookies) {
		NgCookie.instance = new NgCookie($cookies);
		return NgCookie.instance;
	}

	constructor($cookies) {
		this.$cookies_ = $cookies;
	}

	getList(callback = () => {}) {
		const lists = (this.$cookies_.getAll()) ? this.$cookies_.getAll() : [];
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
		const res = (this.$cookies_.get(key)) ? this.$cookies_.get(key) : null;
		callback(res);
	}

	put(key, value, expire, callback = () => {}) {
		if (!key || !value) {
			callback(false);
			return;
		}
		this.$cookies_.put(key, value, {
			expires: (expire) ? moment().add(expire, 'day').format('X') : moment().add(1, 'day').format('X'),
			path: '/',
		});
		callback(true);
	}

	remove(key, callback = () => {}) {
		if (!key) {
			callback(false);
			return;
		}
		this.$cookies_.remove(key, {
			path: '/',
		});
		callback(true);
	}
}

NgCookie.getInstance.$inject = ['$cookies'];

app.factory('NgCookie', NgCookie.getInstance);