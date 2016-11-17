class SpaMessage {

	static getInstance(TemporaryStorage) {
		SpaMessage.instance = new SpaMessage(TemporaryStorage);
		return SpaMessage.instance;
	}

	constructor(TemporaryStorage) {
		'use strict';

		this.TemporaryStorage_ = TemporaryStorage;

		this.restrict = 'E';
		this.scope    = {};
		this.template = `

<div ng-if="self.name">
	Hello, <strong>{{ self.name }}</strong>.
	<div ng-if="self.users.length > 0">
		to: <select ng-model="self.user" ng-change="self.setUser()">
			<option value="">-- select user --</option>
			<option ng-repeat="user in self.users" value="{{ user }}">{{ user }}</option>
		</select>
	</div>
</div>
<div ng-if="!self.name">
	<a href="/spa">&lt;&lt; put your name</a>
</div>

<div ng-if="self.users.length === 0">
	<a href="/spa/users">&lt;&lt; add user</a>
</div>

<div ng-if="self.name && self.user">
	<form ng-submit="self.send()">
		<input type="text" ng-model="self.body">
		<button type="submit">send message</button>
	</form>
	<div>
		<strong><a ng-href="/spa/user/{{ self.user }}">{{ self.user }}</a></strong>'s message list
	</div>
	<ul>
		<li ng-repeat="message in self.messages" ng-if="message.user === self.user">
			{{ message.name }}: {{ message.body }}
		</li>
	</ul>
</div>

		`;
	}

	controller() {
		return {
			name: 'spaMessage',
		};
	}

	link(scopes, elemensts, attrs, controllers) {
		console.log('spaMessage');

		scopes.self = {
			name     : '',
			user     : '',
			body     : '',
			users    : [],
			messages : [],
			setUser : () => {},
			send    : () => {},
		};

		const self = scopes.self;

		const init = () => {
			initName();
			initUsers(() => {
				initUser();
			});
			initMessages();
		};

		const initBody = () => {
			self.body = '';
		};

		const initName = (callback = () => {}) => {
			const name = this.TemporaryStorage_.get('myName');
			if (name) {
				self.name = name;
			}
		};

		const initUser = () => {
			const user = this.TemporaryStorage_.get('user');
			if (user) {
				let exists = false;
				angular.forEach(self.users, (value) => {
					if (user === value) {
						exists = true;
					}
				});
				if (exists) {
					self.user = user;
				}
			}
		};

		const initUsers = (callback = () => {}) => {
			const users = this.TemporaryStorage_.get('users');
			if (users) {
				self.users = users;
			}
			callback();
		};

		const initMessages = () => {
			const messages = this.TemporaryStorage_.get('messages');
			if (messages) {
				self.messages = messages;
			}
		};

		self.setUser = () => {
			this.TemporaryStorage_.put('user', self.user);
		};

		self.send = () => {
			if (!self.body) {
				return;
			}
			self.messages.push({
				name: self.name,
				user: self.user,
				body: self.body,
			});
			this.TemporaryStorage_.put('messages', self.messages);
			initBody();
		};

		init();
	}
}

SpaMessage.getInstance.$inject = ['TemporaryStorage'];

app.directive('spaMessage', SpaMessage.getInstance);