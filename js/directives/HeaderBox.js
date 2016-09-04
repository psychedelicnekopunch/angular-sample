class HeaderBox {

	static getInstance() {
		HeaderBox.instance = new HeaderBox();
		return HeaderBox.instance;
	}

	constructor() {
		this.require  = ['^^todoBox'];
		this.restrict = 'E';
		this.scope    = {};
		this.template = `

<a href="/">home</a>
header

		`;
	}
}

app.directive('headerBox', HeaderBox.getInstance);