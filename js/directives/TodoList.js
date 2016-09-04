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

<h4>TODOs</h4>
<ul>
	<li ng-repeat="user in users">
		<todo-item set-user="user"></todo-item>
	</li>
</ul>

		`;
	}

	controller() {}

	link(scopes, attrs, elemensts, controllers) {

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