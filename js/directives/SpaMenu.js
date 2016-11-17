class SpaMenu {

	static getInstance(LocalStorage) {
		SpaMenu.instance = new SpaMenu(LocalStorage);
		return SpaMenu.instance;
	}

	constructor(LocalStorage) {
		'use strict';

		this.LocalStorage_ = LocalStorage;

		this.restrict = 'E';
		this.scope    = {};
		this.template = `

<nav class="spa-menu">
	<ul class="spa-menu-list">
		<li ng-class="{ active: self.active.top }"><a href="/spa"><span>top</span></a></li>
		<li ng-class="{ active: self.active.users }"><a href="/spa/users"><span>users</span></a></li>
		<li ng-class="{ active: self.active.message }"><a href="/spa/message"><span>message</span></a></li>
	</ul>
</nav>

		`;
	}

	controller() {
		return {
			name: 'spaMenu',
		};
	}

	link(scopes, elemensts, attrs, controllers) {
		console.log('spaMenu');

		scopes.self = {
			active: {
				top     : false,
				users   : false,
				message : false,
			}
		};

		const self = scopes.self;

		const init = () => {
			const active = (attrs.active) ? attrs.active : this.LocalStorage_.get('menu');
			angular.forEach(self.active, (value, key) => {
				self.active[key] = false;
			});
			if (active) {
				self.active[active] = true;
				this.LocalStorage_.put('menu', active);
			} else {
				self.active.top = true;
			}
		};

		init();
	}
}

SpaMenu.getInstance.$inject = ['LocalStorage'];

app.directive('spaMenu', SpaMenu.getInstance);