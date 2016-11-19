class TemporaryStorage {

	static getInstance() {
		TemporaryStorage.instance = new TemporaryStorage();
		return TemporaryStorage.instance;
	}

	constructor() {
		console.log('init class TemporaryStorage');
		this.stores_ = {};
	}

	get(key) {
		if (this.exists(key)) {
			return this.stores_[key].data;
		}
		return null;
	}

	getTimestamp(key) {
		if (this.exists(key)) {
			return this.stores_[key].timestamp;
		}
		return -1;
	}

	put(key, value) {
		if (!key || !value) {
			return false;
		}
		this.stores_[key] = {
			data: value,
			timestamp: Number(moment().format('X')),
		};
		return true;
	}

	remove(key) {
		if (this.exists(key)) {
			delete this.stores_[key];
			return true;
		}
		return false;
	}

	exists(key) {
		if (!key) {
			return false;
		}
		return this.stores_.hasOwnProperty(key);
	}
}

app.factory('TemporaryStorage', TemporaryStorage.getInstance);