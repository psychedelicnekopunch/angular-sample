'use strict';

var app = angular.module('angular-sample', ['ngSanitize', 'ngRoute', 'ngCookies', 'ngAnimate', 'ngTouch', 'ngMessages']);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Routing = function () {
	_createClass(Routing, null, [{
		key: 'getInstance',
		value: function getInstance($routeProvider, $locationProvider) {
			Routing.instance = new Routing($routeProvider, $locationProvider);
			return Routing.instance;
		}
	}]);

	function Routing($routeProvider, $locationProvider) {
		'use strict';

		_classCallCheck(this, Routing);

		$routeProvider.when('/', {
			templateUrl: '/templates/index/index.html',
			controller: 'IndexController',
			controllerAs: 'self'
		}).when('/todo.html', {
			templateUrl: '/templates/todo/index.html',
			controller: 'TodoController',
			controllerAs: 'self'
		});

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true,
			rewriteLinks: true
		});
	}

	return Routing;
}();

Routing.getInstance.$inject = ['$routeProvider', '$locationProvider'];

app.config(Routing.getInstance);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexController = function IndexController($timeout) {
	'use strict';

	var _this = this;

	_classCallCheck(this, IndexController);

	this.initialized = false;

	$timeout(function () {
		_this.initialized = true;
		console.log('IndexController.initialized');
	}, 500);
};

IndexController.$inject = ['$timeout'];

app.controller('IndexController', IndexController);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoController = function TodoController($timeout) {
	'use strict';

	var _this = this;

	_classCallCheck(this, TodoController);

	this.initialized = false;

	$timeout(function () {
		_this.initialized = true;
		console.log('TodoController.initialized');
	}, 500);
};

TodoController.$inject = ['$timeout'];

app.controller('TodoController', TodoController);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderBox = function () {
	_createClass(HeaderBox, null, [{
		key: 'getInstance',
		value: function getInstance() {
			HeaderBox.instance = new HeaderBox();
			return HeaderBox.instance;
		}
	}]);

	function HeaderBox() {
		_classCallCheck(this, HeaderBox);

		this.require = ['^^todoBox'];
		this.restrict = 'E';
		this.scope = {};
		this.template = '\n\n<div class="header-box">\n\t<div><a href="/">home</a></div>\n</div>\n\n\t\t';
	}

	return HeaderBox;
}();

app.directive('headerBox', HeaderBox.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoBox = function () {
	_createClass(TodoBox, null, [{
		key: 'getInstance',
		value: function getInstance(User) {
			TodoBox.instance = new TodoBox(User);
			return TodoBox.instance;
		}
	}]);

	function TodoBox(User) {
		'use strict';

		_classCallCheck(this, TodoBox);

		this.User_ = User;

		this.restrict = 'E';
		this.scope = {}, this.template = '\n\n<div class="todo-box">\n\t<nav class="todo-box-menu">\n\t\t<ul>\n\t\t\t<li ng-click="self.moveContent(\'user\')" ng-class="{ active: self.content.user }">user</li>\n\t\t\t<li ng-click="self.moveContent(\'talk\')"  ng-class="{ active: self.content.talk }">talk</li>\n\t\t</ul>\n\t</nav>\n\t<div class="todo-box-content">\n\t\t<section ng-if="self.content.user">\n\t\t\t<user-box set-users="self.users"></user-box>\n\t\t</section>\n\t\t<section ng-show="self.content.talk">\n\t\t\t<todo-list set-users="self.users"></todo-list>\n\t\t</section>\n\t</div>\n</div>\n\n\t\t';
	}

	_createClass(TodoBox, [{
		key: 'controller',
		value: function controller() {}
	}, {
		key: 'link',
		value: function link(scopes, attrs, elemensts, controllers) {
			var _this = this;

			console.log('TodoBox');

			scopes.self = {
				users: [],
				content: {
					talk: false,
					user: false
				},
				moveContent: function moveContent() {}
			};

			var self = scopes.self;

			var init = function init() {
				initContent(function (content) {
					initUsers(function () {
						console.log('initialized');
					});
				});
			};

			var initUsers = function initUsers(callback) {
				_this.User_.getList(function (lists) {
					self.users = lists;
					if (callback) {
						callback();
					}
					console.log('---- init Users ----');
				});
			};

			var initContent = function initContent(callback) {
				self.moveContent('user');
				if (callback) {
					callback('user');
				}
			};

			self.moveContent = function (content) {
				angular.forEach(self.content, function (value, key) {
					self.content[key] = key === content ? true : false;
				});

				scopes.$broadcast('test.broadcast');
			};

			scopes.$on('userAdded.emit', function () {
				initUsers(function () {
					scopes.$broadcast('userAdded.broadcast');
				});
			});

			scopes.$on('commented.emit', function () {
				scopes.$broadcast('commented.broadcast');
			});

			init();
		}
	}]);

	return TodoBox;
}();

TodoBox.getInstance.$inject = ['User'];

app.directive('todoBox', TodoBox.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoList = function () {
	_createClass(TodoList, null, [{
		key: 'getInstance',
		value: function getInstance(Directive) {
			TodoList.instance = new TodoList(Directive);
			return TodoList.instance;
		}
	}]);

	function TodoList(Directive) {
		_classCallCheck(this, TodoList);

		this.Directive_ = Directive;

		this.require = ['^^todoBox'];
		this.restrict = 'E';
		this.scope = { users: '=setUsers' };
		this.template = '\n\n<div class="todo-list">\n\t<h4>TODOs</h4>\n\t<ul class="todo-list-content">\n\t\t<li ng-repeat="user in users">\n\t\t\t<todo-list-item set-user="user"></todo-list-item>\n\t\t</li>\n\t</ul>\n</div>\n\n\t\t';
	}

	_createClass(TodoList, [{
		key: 'controller',
		value: function controller() {}
	}, {
		key: 'link',
		value: function link(scopes, attrs, elemensts, controllers) {

			this.Directive_.getController(controllers, function (controller) {
				console.log(controller);
			});

			scopes.$watch('users', function (res) {
				console.log('---- call users watched! ----', res);
			});
		}
	}]);

	return TodoList;
}();

TodoList.getInstance.$inject = ['Directive'];

app.directive('todoList', TodoList.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoListItem = function () {
	_createClass(TodoListItem, null, [{
		key: 'getInstance',
		value: function getInstance(Directive) {
			TodoListItem.instance = new TodoListItem(Directive);
			return TodoListItem.instance;
		}
	}]);

	function TodoListItem(Directive) {
		'use strict';

		_classCallCheck(this, TodoListItem);

		this.Directive_ = Directive;

		this.require = ['^^?todoList', '^^?talkBoxs'];
		this.restrict = 'E';
		this.scope = { user: '=setUser' };
		this.template = '\n\n<div class="todo-list-item">\n\t{{ user.name }}\n\t<ul class="comment">\n\t\t<li ng-repeat="comment in self.comments track by $index">\n\t\t\t{{ comment.body }} <small>({{ comment.createdAt }})</small>\n\t\t</li>\n\t</ul>\n\n\t<form ng-submit="self.comment()">\n\t\t<input type="text" ng-model="self.body">\n\t\t<button type="submit">comment</button>\n\t</form>\n</div>\n\n\t\t';
	}

	_createClass(TodoListItem, [{
		key: 'link',
		value: function link(scopes, attrs, elemensts, controllers) {
			var _this = this;

			console.log('TodoListItem');


			scopes.self = {
				body: '',
				comments: []
			};

			var self = scopes.self;

			var initBody = function initBody() {
				self.body = '';
			};

			self.comment = function () {
				if (self.body) {
					return addComment(self.body);
				}
			};

			var addComment = function addComment(comment) {
				self.comments.push({
					body: comment,
					createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
				});
				initBody();
				scopes.$emit('commented.emit');
			};

			scopes.$on('userAdded.broadcast', function () {
				console.log('---- user added! ----');
			});

			Promise.all([new Promise(function (resolve, reject) {
				_this.Directive_.getController(controllers, function (controller) {
					return controller ? resolve(controller) : reject(null);
				});
			}), new Promise(function (resolve, reject) {
				_this.Directive_.getController(controllers, function (controller) {
					return controller ? resolve(controller) : reject(null);
				});
			}), new Promise(function (resolve, reject) {
				_this.Directive_.getController(controllers, function (controller) {
					return controller ? resolve(controller) : reject(null);
				});
			})]).then(function (results) {
				console.log('RESULTS: ', results);
			}, function (err) {
				console.log('ERROR: ', err);
			});
		}
	}]);

	return TodoListItem;
}();

TodoListItem.getInstance.$inject = ['Directive'];

app.directive('todoListItem', TodoListItem.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserBox = function () {
	_createClass(UserBox, null, [{
		key: 'getInstance',
		value: function getInstance(Directive, User) {
			UserBox.instance = new UserBox(Directive, User);
			return UserBox.instance;
		}
	}]);

	function UserBox(Directive, User) {
		'use strict';

		_classCallCheck(this, UserBox);

		this.Directive_ = Directive;
		this.User_ = User;

		this.require = ['^^todoBox'];
		this.restrict = 'E';
		this.scope = { users: '=setUsers' };
		this.template = '\n\n<div class="user-box">\n\t<h4>USER LIST</h4>\n\t<ul>\n\t\t<li ng-repeat="user in self.users">{{ user.id }}: {{ user.name }}</li>\n\t</ul>\n\n\t<form ng-submit="self.add()">\n\t\t<input type="text" ng-model="self.userName">\n\t\t<button type="submit">add</button>\n\t</form>\n</div>\n\n\t\t';
	}

	_createClass(UserBox, [{
		key: 'link',
		value: function link(scopes, attrs, elemensts, controllers) {
			var _this = this;

			console.log('userBox');

			scopes.self = {
				userName: '',
				users: scopes.users ? scopes.users : []
			};

			var self = scopes.self;

			var initUserName = function initUserName() {
				self.userName = '';
			};

			self.add = function () {
				_this.User_.add(self.userName, function (res) {
					if (!res) {
						return;
					}
					initUserName();
					scopes.$emit('userAdded.emit');
				});
			};

			scopes.$on('commented.broadcast', function () {
				console.log('---- commented! ----');
			});

			scopes.$on('test.broadcast', function () {
				console.log('---- test! ----');
			});

			Promise.resolve().then(function () {
				return new Promise(function (resolve, reject) {
					_this.Directive_.getController(controllers, function (controller) {
						return controller ? resolve(controller) : reject(null);
					});
				});
			}).then(function (controller) {
				console.log('THEN: ', controller);
			}).catch(function (err) {
				console.log('ERROR: ', err);
			});
		}
	}]);

	return UserBox;
}();

UserBox.getInstance.$inject = ['Directive', 'User'];

app.directive('userBox', UserBox.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Directive = function () {
    _createClass(Directive, null, [{
        key: 'getInstance',
        value: function getInstance() {
            Directive.instance = new Directive();
            return Directive.instance;
        }
    }]);

    function Directive() {
        _classCallCheck(this, Directive);
    }

    _createClass(Directive, [{
        key: 'getController',
        value: function getController(controllers) {
            var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];


            if (!controllers) {
                return callback(null);
            }
            if (!angular.isArray(controllers)) {
                return callback(controllers);
            }

            var res = null;

            angular.forEach(controllers, function (controller) {
                if (res) {
                    return;
                }
                if (controller) {
                    res = controller;
                }
            });

            return res ? callback(res) : callback(null);
        }
    }]);

    return Directive;
}();

app.factory('Directive', Directive.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
	_createClass(User, null, [{
		key: 'getInstance',
		value: function getInstance() {
			User.instance = new User();
			return User.instance;
		}
	}]);

	function User() {
		'use strict';

		_classCallCheck(this, User);

		this.users_ = [{ id: 1, name: 'Anthony Kiedis' }, { id: 2, name: 'Ed Sheeran' }];
		this.userId_ = this.users_.length;
	}

	_createClass(User, [{
		key: 'getList',
		value: function getList() {
			var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

			callback(this.users_);
		}
	}, {
		key: 'add',
		value: function add(userName) {
			var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

			if (!userName) {
				return callback(false);
			}
			this.users_.push({
				id: ++this.userId_,
				name: userName
			});
			callback(true);
		}
	}]);

	return User;
}();

app.factory('User', User.getInstance);