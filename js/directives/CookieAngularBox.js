class CookieAngularBox {

	static getInstance(NgCookie) {
		CookieAngularBox.instance = new CookieAngularBox(NgCookie);
		return CookieAngularBox.instance;
	}

	constructor(NgCookie) {
		'use strict';

		this.NgCookie_ = NgCookie;

		this.restrict = 'E';
		this.scope    = {},
		this.template = `

<div class="cookie-box cookie-angular-box">
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
		console.log('CookieAngularBox');

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
			this.NgCookie_.getList((lists) => {
				self.cookies = lists;
			});

			this.NgCookie_.get('test', (cookie) => {
				console.log(cookie);
			});
		};

		const initCookieFields = () => {
			self.cookieKey   = null;
			self.cookieValue = null;
		};

		self.setCookie = () => {
			this.NgCookie_.put(self.cookieKey, self.cookieValue, 1, (res) => {
				init();
			});
		};

		self.removeCookie = (key) => {
			this.NgCookie_.remove(key, (res) => {
				init();
			});
		};

		init();
	}
}

CookieAngularBox.getInstance.$inject = ['NgCookie'];

app.directive('cookieAngularBox', CookieAngularBox.getInstance);