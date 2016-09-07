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

<div class="header-box">
	<div><a href="/">home</a></div>
</div>

		`;
	}
}

app.directive('headerBox', HeaderBox.getInstance);