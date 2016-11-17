class TodoList {

	static getInstance(Directive) {
		TodoList.instance = new TodoList(Directive);
		return TodoList.instance;
	}

	constructor(Directive) {

		this.Directive_ = Directive;

		this.require  = ['^^todoBox'];
		this.restrict = 'E';
		this.scope    = { users: '=setUsers' };
		this.template = `

<div class="todo-list">
	<h4>TODOs</h4>
	<ul class="todo-list-content">
		<li ng-repeat="user in users">
			<todo-list-item set-user="user"></todo-list-item>
		</li>
	</ul>
</div>

		`;
	}

	controller() {}

	link(scopes, elemensts, attrs, controllers) {

		this.Directive_.getController(controllers, (controller) => {
			console.log(controller);
		});

		// not recommend to use $watch
		scopes.$watch('users', (res) => {
			console.log('---- call users watched! ----', res);
		});
	}
}

TodoList.getInstance.$inject = ['Directive'];

app.directive('todoList', TodoList.getInstance);