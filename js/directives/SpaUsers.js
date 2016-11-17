class SpaUsers {

	static getInstance(TemporaryStorage) {
		SpaUsers.instance = new SpaUsers(TemporaryStorage);
		return SpaUsers.instance;
	}

	constructor(TemporaryStorage) {
		'use strict';

		this.TemporaryStorage_ = TemporaryStorage;

		this.restrict = 'E';
		this.scope    = {};
		this.template = `

<form ng-submit="self.add()">
	<input type="text" ng-model="self.name">
	<button type="submit">add user</button>
</form>
<div ng-if="self.users.length > 0">
	<a href="/spa/message">send message &gt;&gt;</a><br>
	<hr>
	<strong>user list</strong>
	<ul>
		<li ng-repeat="user in self.users">
			<a ng-href="/spa/user/{{ user }}">{{ user }}</a>
		</li>
	</ul>
</div>
<div ng-if="self.users.length === 0">
	<strong>no users</strong>
</div>

		`;
	}

	controller() {
		return {
			name: 'spaUsers',
		};
	}

	link(scopes, elemensts, attrs, controllers) {
		console.log('spaUsers');

		scopes.self = {
			name: '',
			users: [],
			add: () => {},
		};

		const self = scopes.self;

		const init = () => {
			initUsers();
		};

		const initName = () => {
			self.name = '';
		};

		const initUsers = () => {
			const users = this.TemporaryStorage_.get('users');
			if (users) {
				self.users = users;
			}
		};

		self.add = () => {
			console.log(self.name);
			if (!self.name) {
				return;
			}
			let exists = false;
			angular.forEach(self.users, (value) => {
				if (self.name === value) {
					exists = true;
				}
			});
			if (exists) {
				return;
			}
			self.users.push(self.name);
			this.TemporaryStorage_.put('users', self.users);
			initName();
		};

		init();
	}
}

SpaUsers.getInstance.$inject = ['TemporaryStorage'];

app.directive('spaUsers', SpaUsers.getInstance);