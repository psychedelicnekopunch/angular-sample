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
		}).when('/todo', {
			templateUrl: '/templates/todo/index.html',
			controller: 'TodoController',
			controllerAs: 'self'
		}).when('/cookie', {
			templateUrl: '/templates/cookie/index.html',
			controller: 'CookieController',
			controllerAs: 'self'
		}).when('/spa', {
			templateUrl: '/templates/spa/index.html',
			controller: 'SpaController',
			controllerAs: 'self'
		}).when('/spa/users', {
			templateUrl: '/templates/spa/users.html',
			controller: 'SpaUsersController',
			controllerAs: 'self'
		}).when('/spa/user/:user', {
			templateUrl: '/templates/spa/user.html',
			controller: 'SpaUserController',
			controllerAs: 'self'
		}).when('/spa/message', {
			templateUrl: '/templates/spa/message.html',
			controller: 'SpaMessageController',
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

var CookieController = function CookieController() {
	'use strict';

	_classCallCheck(this, CookieController);

	this.initialized = true;
};

app.controller('CookieController', CookieController);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexController = function IndexController(Location, $timeout) {
	'use strict';

	var _this = this;

	_classCallCheck(this, IndexController);

	this.initialized = false;

	$timeout(function () {
		_this.initialized = true;
		console.log('IndexController.initialized');
	}, 500);
};

IndexController.$inject = ['Location', '$timeout'];

app.controller('IndexController', IndexController);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaController = function SpaController(Location, $timeout) {
	'use strict';

	var _this = this;

	_classCallCheck(this, SpaController);

	this.initialized = false;

	$timeout(function () {
		_this.initialized = true;
		console.log('SpaController.initialized');
	}, 150);
};

SpaController.$inject = ['Location', '$timeout'];

app.controller('SpaController', SpaController);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaMessageController = function SpaMessageController(Location, $timeout) {
	'use strict';

	var _this = this;

	_classCallCheck(this, SpaMessageController);

	this.initialized = false;

	$timeout(function () {
		_this.initialized = true;
		console.log('SpaMessageController.initialized');
	}, 150);
};

SpaMessageController.$inject = ['Location', '$timeout'];

app.controller('SpaMessageController', SpaMessageController);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaUserController = function SpaUserController(Location, $routeParams, $timeout) {
	'use strict';

	var _this = this;

	_classCallCheck(this, SpaUserController);

	this.initialized = false;

	this.routeParams = $routeParams;

	$timeout(function () {
		_this.initialized = true;
		console.log('SpaUserController.initialized');
	}, 150);
};

SpaUserController.$inject = ['Location', '$routeParams', '$timeout'];

app.controller('SpaUserController', SpaUserController);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaUsersController = function SpaUsersController(Location, $timeout) {
	'use strict';

	var _this = this;

	_classCallCheck(this, SpaUsersController);

	this.initialized = false;

	$timeout(function () {
		_this.initialized = true;
		console.log('SpaUsersController.initialized');
	}, 150);
};

SpaUsersController.$inject = ['Location', '$timeout'];

app.controller('SpaUsersController', SpaUsersController);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoController = function TodoController(Location, $timeout) {
	'use strict';

	var _this = this;

	_classCallCheck(this, TodoController);

	this.initialized = false;

	$timeout(function () {
		_this.initialized = true;
		console.log('TodoController.initialized');
	}, 500);
};

TodoController.$inject = ['Location', '$timeout'];

app.controller('TodoController', TodoController);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CookieAngularBox = function () {
	_createClass(CookieAngularBox, null, [{
		key: 'getInstance',
		value: function getInstance(NgCookie) {
			CookieAngularBox.instance = new CookieAngularBox(NgCookie);
			return CookieAngularBox.instance;
		}
	}]);

	function CookieAngularBox(NgCookie) {
		'use strict';

		_classCallCheck(this, CookieAngularBox);

		this.NgCookie_ = NgCookie;

		this.restrict = 'E';
		this.scope = {}, this.template = '\n\n<div class="cookie-box cookie-angular-box">\n\t<ul>\n\t\t<li ng-repeat="list in self.cookies">\n\t\t\t{{ ::list }} <span ng-click="self.removeCookie(list.key)">[x]</span>\n\t\t</li>\n\t</ul>\n\t<form ng-submit="self.setCookie()">\n\t\t<label>\n\t\t\tkey: <input type="text" ng-model="self.cookieKey">\n\t\t</label>\n\t\t<label>\n\t\t\tvalue: <input type="text" ng-model="self.cookieValue">\n\t\t</label>\n\t\t<div>\n\t\t\t<button type="submit">send</button>\n\t\t</div>\n\t</form>\n</div>\n\n\t\t';
	}

	_createClass(CookieAngularBox, [{
		key: 'controller',
		value: function controller() {}
	}, {
		key: 'link',
		value: function link(scopes, elemensts, attrs, controllers) {
			var _this = this;

			console.log('CookieAngularBox');

			scopes.self = {
				cookies: [],
				cookieKey: null,
				cookieValue: null,
				addCookie: function addCookie() {},
				removeCookie: function removeCookie() {}
			};

			var self = scopes.self;

			var init = function init() {
				initCookieFields();
				_this.NgCookie_.getList(function (lists) {
					self.cookies = lists;
				});

				_this.NgCookie_.get('test', function (cookie) {
					console.log(cookie);
				});
			};

			var initCookieFields = function initCookieFields() {
				self.cookieKey = null;
				self.cookieValue = null;
			};

			self.setCookie = function () {
				_this.NgCookie_.put(self.cookieKey, self.cookieValue, 1, function (res) {
					init();
				});
			};

			self.removeCookie = function (key) {
				_this.NgCookie_.remove(key, function (res) {
					init();
				});
			};

			init();
		}
	}]);

	return CookieAngularBox;
}();

CookieAngularBox.getInstance.$inject = ['NgCookie'];

app.directive('cookieAngularBox', CookieAngularBox.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CookieBox = function () {
	_createClass(CookieBox, null, [{
		key: 'getInstance',
		value: function getInstance(Cookie) {
			CookieBox.instance = new CookieBox(Cookie);
			return CookieBox.instance;
		}
	}]);

	function CookieBox(Cookie) {
		'use strict';

		_classCallCheck(this, CookieBox);

		this.Cookie_ = Cookie;

		this.restrict = 'E';
		this.scope = {}, this.template = '\n\n<div class="cookie-box">\n\t<ul>\n\t\t<li ng-repeat="list in self.cookies">\n\t\t\t{{ ::list }} <span ng-click="self.removeCookie(list.key)">[x]</span>\n\t\t</li>\n\t</ul>\n\t<form ng-submit="self.setCookie()">\n\t\t<label>\n\t\t\tkey: <input type="text" ng-model="self.cookieKey">\n\t\t</label>\n\t\t<label>\n\t\t\tvalue: <input type="text" ng-model="self.cookieValue">\n\t\t</label>\n\t\t<div>\n\t\t\t<button type="submit">send</button>\n\t\t</div>\n\t</form>\n</div>\n\n\t\t';
	}

	_createClass(CookieBox, [{
		key: 'controller',
		value: function controller() {}
	}, {
		key: 'link',
		value: function link(scopes, elemensts, attrs, controllers) {
			var _this = this;

			console.log('CookieBox');

			scopes.self = {
				cookies: [],
				cookieKey: null,
				cookieValue: null,
				addCookie: function addCookie() {},
				removeCookie: function removeCookie() {}
			};

			var self = scopes.self;

			var init = function init() {
				initCookieFields();
				_this.Cookie_.getList(function (lists) {
					self.cookies = lists;
				});

				_this.Cookie_.get('test', function (cookie) {
					console.log(cookie);
				});
			};

			var initCookieFields = function initCookieFields() {
				self.cookieKey = null;
				self.cookieValue = null;
			};

			self.setCookie = function () {
				_this.Cookie_.put(self.cookieKey, self.cookieValue, 1, function (res) {
					init();
				});
			};

			self.removeCookie = function (key) {
				_this.Cookie_.remove(key, function (res) {
					init();
				});
			};

			init();
		}
	}]);

	return CookieBox;
}();

CookieBox.getInstance.$inject = ['Cookie'];

app.directive('cookieBox', CookieBox.getInstance);
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

var SpaMenu = function () {
	_createClass(SpaMenu, null, [{
		key: 'getInstance',
		value: function getInstance(LocalStorage) {
			SpaMenu.instance = new SpaMenu(LocalStorage);
			return SpaMenu.instance;
		}
	}]);

	function SpaMenu(LocalStorage) {
		'use strict';

		_classCallCheck(this, SpaMenu);

		this.LocalStorage_ = LocalStorage;

		this.restrict = 'E';
		this.scope = {};
		this.template = '\n\n<nav class="spa-menu">\n\t<ul class="spa-menu-list">\n\t\t<li ng-class="{ active: self.active.top }"><a href="/spa"><span>top</span></a></li>\n\t\t<li ng-class="{ active: self.active.users }"><a href="/spa/users"><span>users</span></a></li>\n\t\t<li ng-class="{ active: self.active.message }"><a href="/spa/message"><span>message</span></a></li>\n\t</ul>\n</nav>\n\n\t\t';
	}

	_createClass(SpaMenu, [{
		key: 'controller',
		value: function controller() {
			return {
				name: 'spaMenu'
			};
		}
	}, {
		key: 'link',
		value: function link(scopes, elemensts, attrs, controllers) {
			var _this = this;

			console.log('spaMenu');

			scopes.self = {
				active: {
					top: false,
					users: false,
					message: false
				}
			};

			var self = scopes.self;

			var init = function init() {
				var active = attrs.active ? attrs.active : _this.LocalStorage_.get('menu');
				angular.forEach(self.active, function (value, key) {
					self.active[key] = false;
				});
				if (active) {
					self.active[active] = true;
					_this.LocalStorage_.put('menu', active);
				} else {
					self.active.top = true;
				}
			};

			init();
		}
	}]);

	return SpaMenu;
}();

SpaMenu.getInstance.$inject = ['LocalStorage'];

app.directive('spaMenu', SpaMenu.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaMessage = function () {
	_createClass(SpaMessage, null, [{
		key: 'getInstance',
		value: function getInstance(TemporaryStorage) {
			SpaMessage.instance = new SpaMessage(TemporaryStorage);
			return SpaMessage.instance;
		}
	}]);

	function SpaMessage(TemporaryStorage) {
		'use strict';

		_classCallCheck(this, SpaMessage);

		this.TemporaryStorage_ = TemporaryStorage;

		this.restrict = 'E';
		this.scope = {};
		this.template = '\n\n<div ng-if="self.name">\n\tHello, <strong>{{ self.name }}</strong>.\n\t<div ng-if="self.users.length > 0">\n\t\tto: <select ng-model="self.user" ng-change="self.setUser()">\n\t\t\t<option value="">-- select user --</option>\n\t\t\t<option ng-repeat="user in self.users" value="{{ user }}">{{ user }}</option>\n\t\t</select>\n\t</div>\n</div>\n<div ng-if="!self.name">\n\t<a href="/spa">&lt;&lt; put your name</a>\n</div>\n\n<div ng-if="self.users.length === 0">\n\t<a href="/spa/users">&lt;&lt; add user</a>\n</div>\n\n<div ng-if="self.name && self.user">\n\t<form ng-submit="self.send()">\n\t\t<input type="text" ng-model="self.body">\n\t\t<button type="submit">send message</button>\n\t</form>\n\t<div>\n\t\t<strong><a ng-href="/spa/user/{{ self.user }}">{{ self.user }}</a></strong>\'s message list\n\t</div>\n\t<ul>\n\t\t<li ng-repeat="message in self.messages" ng-if="message.user === self.user">\n\t\t\t{{ message.name }}: {{ message.body }}\n\t\t</li>\n\t</ul>\n</div>\n\n\t\t';
	}

	_createClass(SpaMessage, [{
		key: 'controller',
		value: function controller() {
			return {
				name: 'spaMessage'
			};
		}
	}, {
		key: 'link',
		value: function link(scopes, elemensts, attrs, controllers) {
			var _this = this;

			console.log('spaMessage');

			scopes.self = {
				name: '',
				user: '',
				body: '',
				users: [],
				messages: [],
				setUser: function setUser() {},
				send: function send() {}
			};

			var self = scopes.self;

			var init = function init() {
				initName();
				initUsers(function () {
					initUser();
				});
				initMessages();
			};

			var initBody = function initBody() {
				self.body = '';
			};

			var initName = function initName() {
				var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

				var name = _this.TemporaryStorage_.get('myName');
				if (name) {
					self.name = name;
				}
			};

			var initUser = function initUser() {
				var user = _this.TemporaryStorage_.get('user');
				if (user) {
					var exists = false;
					angular.forEach(self.users, function (value) {
						if (user === value) {
							exists = true;
						}
					});
					if (exists) {
						self.user = user;
					}
				}
			};

			var initUsers = function initUsers() {
				var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

				var users = _this.TemporaryStorage_.get('users');
				if (users) {
					self.users = users;
				}
				callback();
			};

			var initMessages = function initMessages() {
				var messages = _this.TemporaryStorage_.get('messages');
				if (messages) {
					self.messages = messages;
				}
			};

			self.setUser = function () {
				_this.TemporaryStorage_.put('user', self.user);
			};

			self.send = function () {
				if (!self.body) {
					return;
				}
				self.messages.push({
					name: self.name,
					user: self.user,
					body: self.body
				});
				_this.TemporaryStorage_.put('messages', self.messages);
				initBody();
			};

			init();
		}
	}]);

	return SpaMessage;
}();

SpaMessage.getInstance.$inject = ['TemporaryStorage'];

app.directive('spaMessage', SpaMessage.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaTop = function () {
	_createClass(SpaTop, null, [{
		key: 'getInstance',
		value: function getInstance(TemporaryStorage) {
			SpaTop.instance = new SpaTop(TemporaryStorage);
			return SpaTop.instance;
		}
	}]);

	function SpaTop(TemporaryStorage) {
		'use strict';

		_classCallCheck(this, SpaTop);

		this.TemporaryStorage_ = TemporaryStorage;

		this.restrict = 'E';
		this.scope = {};
		this.template = '\n\nyou name: <input type="text" ng-model="self.name" ng-change="self.setName()">\n<div ng-if="self.timestamp > 0"><small>(last updated at: {{ self.timestamp }})</small></div>\n<div ng-if="self.name">\n\t<a href="/spa/message">send message &gt;&gt;</a>\n</div>\n\n\t\t';
	}

	_createClass(SpaTop, [{
		key: 'controller',
		value: function controller() {
			return {
				name: 'spaTop'
			};
		}
	}, {
		key: 'link',
		value: function link(scopes, elemensts, attrs, controllers) {
			var _this = this;

			console.log('spaTop');

			scopes.self = {
				name: '',
				timestamp: -1,
				setName: function setName() {}
			};

			var self = scopes.self;

			var init = function init() {
				initName();
			};

			var initName = function initName() {
				var name = _this.TemporaryStorage_.get('myName');
				if (name) {
					self.name = name;
				}
				initNameTimestamp();
			};

			var initNameTimestamp = function initNameTimestamp() {
				self.timestamp = _this.TemporaryStorage_.getTimestamp('myName');
				console.log(self.timestamp);
			};

			self.setName = function () {
				_this.TemporaryStorage_.put('myName', self.name);
				initNameTimestamp();
			};

			init();
		}
	}]);

	return SpaTop;
}();

SpaTop.getInstance.$inject = ['TemporaryStorage'];

app.directive('spaTop', SpaTop.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaUser = function () {
	_createClass(SpaUser, null, [{
		key: 'getInstance',
		value: function getInstance(TemporaryStorage) {
			SpaUser.instance = new SpaUser(TemporaryStorage);
			return SpaUser.instance;
		}
	}]);

	function SpaUser(TemporaryStorage) {
		'use strict';

		_classCallCheck(this, SpaUser);

		this.TemporaryStorage_ = TemporaryStorage;

		this.restrict = 'E';
		this.scope = { routeParams: '=routeParams' };
		this.template = '\n\n<div ng-if="self.isUser">\n\t<div>User Data</div>\n\tname: <strong>{{ self.user }}</strong>\n</div>\n\n<div ng-if="!self.isUser">\n\tNot Found <strong>{{ self.user }}</strong>\n</div>\n\n\t\t';
	}

	_createClass(SpaUser, [{
		key: 'controller',
		value: function controller() {
			return {
				name: 'spaUser'
			};
		}
	}, {
		key: 'link',
		value: function link(scopes, elemensts, attrs, controllers) {
			var _this = this;

			console.log('spaUser');

			scopes.self = {
				isUser: false,
				user: ''
			};

			var self = scopes.self;

			var users = [];

			var init = function init() {

				self.user = scopes.routeParams.user ? scopes.routeParams.user : '';

				initUsers(function () {
					checkExistsUser();
				});
			};

			var initUsers = function initUsers() {
				var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

				var lists = _this.TemporaryStorage_.get('users');
				if (lists) {
					users = lists;
				}
				callback();
			};

			var checkExistsUser = function checkExistsUser() {
				if (!self.user) {
					return;
				}
				self.isUser = false;
				angular.forEach(users, function (user) {
					if (self.user === user) {
						self.isUser = true;
					}
				});
			};

			init();
		}
	}]);

	return SpaUser;
}();

SpaUser.getInstance.$inject = ['TemporaryStorage'];

app.directive('spaUser', SpaUser.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaUsers = function () {
	_createClass(SpaUsers, null, [{
		key: 'getInstance',
		value: function getInstance(TemporaryStorage) {
			SpaUsers.instance = new SpaUsers(TemporaryStorage);
			return SpaUsers.instance;
		}
	}]);

	function SpaUsers(TemporaryStorage) {
		'use strict';

		_classCallCheck(this, SpaUsers);

		this.TemporaryStorage_ = TemporaryStorage;

		this.restrict = 'E';
		this.scope = {};
		this.template = '\n\n<form ng-submit="self.add()">\n\t<input type="text" ng-model="self.name">\n\t<button type="submit">add user</button>\n</form>\n<div ng-if="self.users.length > 0">\n\t<a href="/spa/message">send message &gt;&gt;</a><br>\n\t<hr>\n\t<strong>user list</strong>\n\t<ul>\n\t\t<li ng-repeat="user in self.users">\n\t\t\t<a ng-href="/spa/user/{{ user }}">{{ user }}</a>\n\t\t</li>\n\t</ul>\n</div>\n<div ng-if="self.users.length === 0">\n\t<strong>no users</strong>\n</div>\n\n\t\t';
	}

	_createClass(SpaUsers, [{
		key: 'controller',
		value: function controller() {
			return {
				name: 'spaUsers'
			};
		}
	}, {
		key: 'link',
		value: function link(scopes, elemensts, attrs, controllers) {
			var _this = this;

			console.log('spaUsers');

			scopes.self = {
				name: '',
				users: [],
				add: function add() {}
			};

			var self = scopes.self;

			var init = function init() {
				initUsers();
			};

			var initName = function initName() {
				self.name = '';
			};

			var initUsers = function initUsers() {
				var users = _this.TemporaryStorage_.get('users');
				if (users) {
					self.users = users;
				}
			};

			self.add = function () {
				console.log(self.name);
				if (!self.name) {
					return;
				}
				var exists = false;
				angular.forEach(self.users, function (value) {
					if (self.name === value) {
						exists = true;
					}
				});
				if (exists) {
					return;
				}
				self.users.push(self.name);
				_this.TemporaryStorage_.put('users', self.users);
				initName();
			};

			init();
		}
	}]);

	return SpaUsers;
}();

SpaUsers.getInstance.$inject = ['TemporaryStorage'];

app.directive('spaUsers', SpaUsers.getInstance);
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
		value: function link(scopes, elemensts, attrs, controllers) {
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
		value: function link(scopes, elemensts, attrs, controllers) {

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
		value: function link(scopes, elemensts, attrs, controllers) {
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
		value: function link(scopes, elemensts, attrs, controllers) {
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

var Cookie = function () {
	_createClass(Cookie, null, [{
		key: 'getInstance',
		value: function getInstance() {
			Cookie.instance = new Cookie();
			return Cookie.instance;
		}
	}]);

	function Cookie() {
		_classCallCheck(this, Cookie);
	}

	_createClass(Cookie, [{
		key: 'getList',
		value: function getList() {
			var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

			var lists = Cookies.get() ? Cookies.get() : [];
			var res = [];
			angular.forEach(lists, function (value, key) {
				res.push({ key: key, value: value });
			});
			callback(res);
		}
	}, {
		key: 'get',
		value: function get(key) {
			var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

			if (!key) {
				callback(null);
				return;
			}
			var res = Cookies.get(key) ? Cookies.get(key) : null;
			callback(res);
		}
	}, {
		key: 'put',
		value: function put(key, value, expire) {
			var callback = arguments.length <= 3 || arguments[3] === undefined ? function () {} : arguments[3];

			if (!key || !value) {
				callback(false);
				return;
			}
			Cookies.set(key, value, {
				expires: expire ? expire : 1,
				path: '/'
			});
			callback(true);
		}
	}, {
		key: 'remove',
		value: function remove(key) {
			var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

			if (!key) {
				callback(false);
				return;
			}
			Cookies.remove(key, {
				path: '/'
			});
			callback(true);
		}
	}]);

	return Cookie;
}();

app.factory('Cookie', Cookie.getInstance);
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

var LocalStorage = function () {
	_createClass(LocalStorage, null, [{
		key: 'getInstance',
		value: function getInstance() {
			LocalStorage.instance = new LocalStorage();
			return LocalStorage.instance;
		}
	}]);

	function LocalStorage() {
		_classCallCheck(this, LocalStorage);

		console.log('init class LocalStorage');
	}

	_createClass(LocalStorage, [{
		key: 'get',
		value: function get(key) {
			if (this.exists(key)) {
				return localStorage.getItem(key);
			}
			return null;
		}
	}, {
		key: 'put',
		value: function put(key, value) {
			if (!key || !value) {
				return false;
			}
			localStorage.setItem(key, value);
			return true;
		}
	}, {
		key: 'remove',
		value: function remove(key) {
			if (this.exists(key)) {
				localStorage.removeItem(key);
				return true;
			}
			return false;
		}
	}, {
		key: 'exists',
		value: function exists(key) {
			if (!key) {
				return false;
			}
			return localStorage.getItem(key) ? true : false;
		}
	}]);

	return LocalStorage;
}();

app.factory('LocalStorage', LocalStorage.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Location = function () {
	_createClass(Location, null, [{
		key: 'getInstance',
		value: function getInstance($rootScope, $location) {
			Location.instance = new Location($rootScope, $location);
			return Location.instance;
		}
	}]);

	function Location($rootScope, $location) {
		'use strict';

		_classCallCheck(this, Location);

		console.log('init class Location');
		$rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl, newState, oldState) {});
	}

	return Location;
}();

Location.getInstance.$inject = ['$rootScope', '$location'];

app.factory('Location', Location.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NgCookie = function () {
	_createClass(NgCookie, null, [{
		key: 'getInstance',
		value: function getInstance($cookies) {
			NgCookie.instance = new NgCookie($cookies);
			return NgCookie.instance;
		}
	}]);

	function NgCookie($cookies) {
		_classCallCheck(this, NgCookie);

		this.$cookies_ = $cookies;
	}

	_createClass(NgCookie, [{
		key: 'getList',
		value: function getList() {
			var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

			var lists = this.$cookies_.getAll() ? this.$cookies_.getAll() : [];
			var res = [];
			angular.forEach(lists, function (value, key) {
				res.push({ key: key, value: value });
			});
			callback(res);
		}
	}, {
		key: 'get',
		value: function get(key) {
			var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

			if (!key) {
				callback(null);
				return;
			}
			var res = this.$cookies_.get(key) ? this.$cookies_.get(key) : null;
			callback(res);
		}
	}, {
		key: 'put',
		value: function put(key, value, expire) {
			var callback = arguments.length <= 3 || arguments[3] === undefined ? function () {} : arguments[3];

			if (!key || !value) {
				callback(false);
				return;
			}
			this.$cookies_.put(key, value, {
				expires: expire ? moment().add(expire, 'day').format('X') : moment().add(1, 'day').format('X'),
				path: '/'
			});
			callback(true);
		}
	}, {
		key: 'remove',
		value: function remove(key) {
			var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

			if (!key) {
				callback(false);
				return;
			}
			this.$cookies_.remove(key, {
				path: '/'
			});
			callback(true);
		}
	}]);

	return NgCookie;
}();

NgCookie.getInstance.$inject = ['$cookies'];

app.factory('NgCookie', NgCookie.getInstance);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemporaryStorage = function () {
	_createClass(TemporaryStorage, null, [{
		key: 'getInstance',
		value: function getInstance() {
			TemporaryStorage.instance = new TemporaryStorage();
			return TemporaryStorage.instance;
		}
	}]);

	function TemporaryStorage() {
		_classCallCheck(this, TemporaryStorage);

		console.log('init class TemporaryStorage');
		this.stores_ = {};
	}

	_createClass(TemporaryStorage, [{
		key: 'get',
		value: function get(key) {
			if (this.exists(key)) {
				return this.stores_[key].data;
			}
			return null;
		}
	}, {
		key: 'getTimestamp',
		value: function getTimestamp(key) {
			if (this.exists(key)) {
				return this.stores_[key].timestamp;
			}
			return -1;
		}
	}, {
		key: 'put',
		value: function put(key, value) {
			if (!key || !value) {
				return false;
			}
			this.stores_[key] = {
				data: value,
				timestamp: Number(moment().format('X'))
			};
			return true;
		}
	}, {
		key: 'remove',
		value: function remove(key) {
			if (this.exists(key)) {
				delete this.stores_[key];
				return true;
			}
			return false;
		}
	}, {
		key: 'exists',
		value: function exists(key) {
			if (!key) {
				return false;
			}
			return this.stores_.hasOwnProperty(key);
		}
	}]);

	return TemporaryStorage;
}();

app.factory('TemporaryStorage', TemporaryStorage.getInstance);
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