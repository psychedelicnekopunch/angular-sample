class CookieBox {

	static getInstance(Cookie) {
		CookieBox.instance = new CookieBox(Cookie);
		return CookieBox.instance;
	}

	constructor(Cookie) {
		'use strict';

		this.Cookie_ = Cookie;

		this.restrict = 'E';
		this.scope    = {},
		this.template = `

<div class="cookie-box">
	<ul>
		<li ng-repeat="list in self.cookies">
			{{ ::list }} <span ng-click="self.removeCookie(list.key)">[x]</span>
		</li>
	</ul>
	<form ng-submit="self.setCookie()">
		<label>
			key: <input type="text" ng-model="self.cookieKey">
		</label>
		<label>
			value: <input type="text" ng-model="self.cookieValue">
		</label>
		<div>
			<button type="submit">send</button>
		</div>
	</form>
</div>

		`;
	}

	controller() {}

	link(scopes, elemensts, attrs, controllers) {
		console.log('CookieBox');

		scopes.self = {
			cookies      : [],
			cookieKey    : null,
			cookieValue  : null,
			addCookie    : () => {},
			removeCookie : () => {},
		};

		const self = scopes.self;

		const init = () => {
			initCookieFields();
			this.Cookie_.getList((lists) => {
				self.cookies = lists;
			});

			this.Cookie_.get('test', (cookie) => {
				console.log(cookie);
			});
		};

		const initCookieFields = () => {
			self.cookieKey   = null;
			self.cookieValue = null;
		};

		self.setCookie = () => {
			this.Cookie_.put(self.cookieKey, self.cookieValue, 1, (res) => {
				init();
			});
		};

		self.removeCookie = (key) => {
			this.Cookie_.remove(key, (res) => {
				init();
			});
		};

		init();
	}
}

CookieBox.getInstance.$inject = ['Cookie'];

app.directive('cookieBox', CookieBox.getInstance);