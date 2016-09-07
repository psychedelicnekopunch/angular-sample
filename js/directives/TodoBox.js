class TodoBox {

	static getInstance(User) {
		TodoBox.instance = new TodoBox(User);
		return TodoBox.instance;
	}

	constructor(User) {
		'use strict';

		this.User_ = User;

		this.restrict = 'E';
		this.scope    = {},
		this.template = `

<div class="todo-box">
	<nav class="todo-box-menu">
		<ul>
			<li ng-click="self.moveContent('user')" ng-class="{ active: self.content.user }">user</li>
			<li ng-click="self.moveContent('talk')"  ng-class="{ active: self.content.talk }">talk</li>
		</ul>
	</nav>
	<div class="todo-box-content">
		<section ng-if="self.content.user">
			<user-box set-users="self.users"></user-box>
		</section>
		<section ng-show="self.content.talk">
			<todo-list set-users="self.users"></todo-list>
		</section>
	</div>
</div>

		`;
	}

	controller() {}

	link(scopes, attrs, elemensts, controllers) {
		console.log('TodoBox');

		scopes.self = {
			users: [],
			content: {
				talk: false,
				user: false,
			},
			moveContent: () => {},
		};

		const self = scopes.self;

		const init = () => {
			initContent((content) => {
				initUsers(() => {
					console.log('initialized');
				});
			});
		};

		const initUsers = (callback) => {
			this.User_.getList((lists) => {
				self.users = lists;
				if (callback) { callback(); }
				console.log('---- init Users ----');
			});
		};

		const initContent = (callback) => {
			self.moveContent('user');
			if (callback) { callback('user'); }
		};

		self.moveContent = (content) => {
			angular.forEach(self.content, (value, key) => {
				self.content[key] = (key === content) ? true : false;
			});
			// not recommend to use $broadcast
			scopes.$broadcast('test.broadcast');
		};

		scopes.$on('userAdded.emit', () => {
			initUsers(() => {
				// not recommend to use $broadcast
				scopes.$broadcast('userAdded.broadcast');
			});
		});

		scopes.$on('commented.emit', () => {
			// not recommend to use $broadcast
			scopes.$broadcast('commented.broadcast');
		});

		init();
	}
}

TodoBox.getInstance.$inject = ['User'];

app.directive('todoBox', TodoBox.getInstance);