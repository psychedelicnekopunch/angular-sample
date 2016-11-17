class SpaUser {

	static getInstance(TemporaryStorage) {
		SpaUser.instance = new SpaUser(TemporaryStorage);
		return SpaUser.instance;
	}

	constructor(TemporaryStorage) {
		'use strict';

		this.TemporaryStorage_ = TemporaryStorage;

		this.restrict = 'E';
		this.scope    = { routeParams: '=routeParams' };
		this.template = `

<div ng-if="self.isUser">
	<div>User Data</div>
	name: <strong>{{ self.user }}</strong>
</div>

<div ng-if="!self.isUser">
	Not Found <strong>{{ self.user }}</strong>
</div>

		`;
	}

	controller() {
		return {
			name: 'spaUser',
		};
	}

	link(scopes, elemensts, attrs, controllers) {
		console.log('spaUser');

		scopes.self = {
			isUser : false,
			user   : '',
		};

		const self = scopes.self;

		let users = [];

		const init = () => {

			self.user = (scopes.routeParams.user) ? scopes.routeParams.user : '';

			initUsers(() => {
				checkExistsUser();
			});
		};

		const initUsers = (callback = () => {}) => {
			const lists = this.TemporaryStorage_.get('users');
			if (lists) {
				users = lists;
			}
			callback();
		};

		const checkExistsUser = () => {
			if (!self.user) {
				return;
			}
			self.isUser = false;
			angular.forEach(users, (user) => {
				if (self.user === user) {
					self.isUser = true;
				}
			});
		};

		init();
	}
}

SpaUser.getInstance.$inject = ['TemporaryStorage'];

app.directive('spaUser', SpaUser.getInstance);