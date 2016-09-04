class TodoItem {

	static getInstance(Directive) {
		TodoItem.instance = new TodoItem(Directive);
		return TodoItem.instance;
	}

	constructor(Directive) {
		'use strict';

		this.Directive_ = Directive;

		this.require  = ['^^?todoList', '^^?talkBoxs'];
		this.restrict = 'E';
		this.scope    = { user: '=setUser' };
		this.template = `

{{ user.name }}
<ul>
	<li ng-repeat="comment in self.comments track by $index">{{ comment }}</li>
</ul>

<form ng-submit="self.comment()">
	<input type="text" ng-model="self.body">
	<button type="submit">send</button>
</form>

		`;
	}

	link(scopes, attrs, elemensts, controllers) {
		console.log('TodoItem');
		// console.log(scopes);
		// console.log(attrs);
		// console.log(elemensts);

		scopes.self = {
			body     : '',
			comments : [],
		};

		const self = scopes.self;

		const initBody = () => {
			self.body = '';
		};

		self.comment = () => {
			if (self.body) {
				return addComment(self.body);
			}
		};

		const addComment = (comment) => {
			self.comments.push(comment);
			initBody();
			scopes.$emit('commented.emit');
		};

		// not recommend to use $broadcast
		scopes.$on('userAdded.broadcast', () => {
			console.log('---- user added! ----');
		});


		Promise.all([
			new Promise((resolve, reject) => {
				this.Directive_.getController(controllers, (controller) => {
					return (controller) ? resolve(controller) : reject(null);
				});
			}),
			new Promise((resolve, reject) => {
				this.Directive_.getController(controllers, (controller) => {
					return (controller) ? resolve(controller) : reject(null);
				});
			}),
			new Promise((resolve, reject) => {
				this.Directive_.getController(controllers, (controller) => {
					return (controller) ? resolve(controller) : reject(null);
				});
			}),
		]).then(
			(results) => {
				console.log('RESULTS: ', results);
			},
			(err) => {
				console.log('ERROR: ', err);
			}
		);
	}
}

TodoItem.getInstance.$inject = ['Directive'];

app.directive('todoItem', TodoItem.getInstance);