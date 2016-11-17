class UserBox {

	static getInstance(Directive, User) {
		UserBox.instance = new UserBox(Directive, User);
		return UserBox.instance;
	}

	constructor(Directive, User) {
		'use strict';

		this.Directive_ = Directive;
		this.User_ = User;

		this.require  = ['^^todoBox'];
		this.restrict = 'E';
		this.scope    = { users: '=setUsers' };
		this.template = `

<div class="user-box">
	<h4>USER LIST</h4>
	<ul>
		<li ng-repeat="user in self.users">{{ user.id }}: {{ user.name }}</li>
	</ul>

	<form ng-submit="self.add()">
		<input type="text" ng-model="self.userName">
		<button type="submit">add</button>
	</form>
</div>

		`;
	}

	link(scopes, elemensts, attrs, controllers) {
		console.log('userBox');
		// console.log(scopes);
		// console.log(attrs);
		// console.log(elemensts);
		scopes.self = {
			userName: '',
			users   : (scopes.users) ? scopes.users : [],
		};

		const self = scopes.self;

		const initUserName = () => {
			self.userName = '';
		};

		self.add = () => {
			this.User_.add(self.userName, (res) => {
				if (!res) {
					return;
				}
				initUserName();
				scopes.$emit('userAdded.emit');
			});
		};

		// not recommend to use $broadcast
		scopes.$on('commented.broadcast', () => {
			console.log('---- commented! ----');
		});

		// not recommend to use $broadcast
		scopes.$on('test.broadcast', () => {
			console.log('---- test! ----');
		});


		Promise.resolve()
			.then(() => {
				return new Promise((resolve, reject) => {
					this.Directive_.getController(controllers, (controller) => {
						return (controller) ? resolve(controller) : reject(null);
					});
				});
			})
			.then((controller) => {
				console.log('THEN: ', controller);
			})
			.catch((err) => {
				console.log('ERROR: ', err);
			});
	}
}

UserBox.getInstance.$inject = ['Directive', 'User'];

app.directive('userBox', UserBox.getInstance);