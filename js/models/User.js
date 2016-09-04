class User {

	static getInstance() {
		User.instance = new User();
		return User.instance;
	}

	constructor() {
		'use strict';

		this.users_ = [
			{ id: 1, name: 'Anthony Kiedis' },
			{ id: 2, name: 'Ed Sheeran' },
		];
		this.userId_ = this.users_.length;
	}

	getList(callback = () =>{}) {
		callback(this.users_);
	}

	add(userName, callback = () => {}) {
		if (!userName) {
			return callback(false);
		}
		this.users_.push({
			id   : ++this.userId_,
			name : userName,
		});
		callback(true);
	}
}

app.factory('User', User.getInstance);