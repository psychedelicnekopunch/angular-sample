class TodoListItem {

	static getInstance(Directive) {
		TodoListItem.instance = new TodoListItem(Directive);
		return TodoListItem.instance;
	}

	constructor(Directive) {
		'use strict';

		this.Directive_ = Directive;

		this.require  = ['^^?todoList', '^^?talkBoxs'];
		this.restrict = 'E';
		this.scope    = { user: '=setUser' };
		this.template = `

<div class="todo-list-item">
	{{ user.name }}
	<ul class="comment">
		<li ng-repeat="comment in self.comments track by $index">
			{{ comment.body }} <small>({{ comment.createdAt }})</small>
		</li>
	</ul>

	<form ng-submit="self.comment()">
		<input type="text" ng-model="self.body">
		<button type="submit">comment</button>
	</form>
</div>

		`;
	}

	link(scopes, attrs, elemensts, controllers) {
		console.log('TodoListItem');
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
			self.comments.push({
				body: comment,
				createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
			});
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

TodoListItem.getInstance.$inject = ['Directive'];

app.directive('todoListItem', TodoListItem.getInstance);