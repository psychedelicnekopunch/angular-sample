class LocalStorage {

	static getInstance() {
		LocalStorage.instance = new LocalStorage();
		return LocalStorage.instance;
	}

	constructor() {
		console.log('init class LocalStorage');
		// localStorageはString型以外保存できないので、arrayなどを保存する時はjson形式にする
	}

	get(key) {
		if (this.exists(key)) {
			return localStorage.getItem(key);
		}
		return null;
	}

	put(key, value) {
		if (!key || !value) {
			return false;
		}
		localStorage.setItem(key, value);
		return true;
	}

	remove(key) {
		if (this.exists(key)) {
			localStorage.removeItem(key);
			return true;
		}
		return false;
	}

	exists(key) {
		if (!key) {
			return false;
		}
		return (localStorage.getItem(key)) ? true : false;
	}
}

app.factory('LocalStorage', LocalStorage.getInstance);