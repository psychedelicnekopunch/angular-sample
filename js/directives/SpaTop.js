class SpaTop {

	static getInstance(TemporaryStorage) {
		SpaTop.instance = new SpaTop(TemporaryStorage);
		return SpaTop.instance;
	}

	constructor(TemporaryStorage) {
		'use strict';

		this.TemporaryStorage_ = TemporaryStorage;

		this.restrict = 'E';
		this.scope    = {};
		this.template = `

you name: <input type="text" ng-model="self.name" ng-change="self.setName()">
<div ng-if="self.timestamp > 0"><small>(last updated at: {{ self.timestamp }})</small></div>
<div ng-if="self.name">
	<a href="/spa/message">send message &gt;&gt;</a>
</div>

		`;
	}

	controller() {
		return {
			name: 'spaTop',
		};
	}

	link(scopes, elemensts, attrs, controllers) {
		console.log('spaTop');

		scopes.self = {
			name: '',
			timestamp: -1,
			setName: () => {},
		};

		const self = scopes.self;

		const init = () => {
			initName();
		};

		const initName = () => {
			const name = this.TemporaryStorage_.get('myName');
			if (name) {
				self.name = name;
			}
			initNameTimestamp();
		};

		const initNameTimestamp = () => {
			self.timestamp = this.TemporaryStorage_.getTimestamp('myName');
			console.log(self.timestamp);
		};

		self.setName = () => {
			this.TemporaryStorage_.put('myName', self.name);
			initNameTimestamp();
		};

		init();
	}
}

SpaTop.getInstance.$inject = ['TemporaryStorage'];

app.directive('spaTop', SpaTop.getInstance);