class Directive {

	static getInstance() {
		Directive.instance = new Directive();
		return Directive.instance;
	}

	constructor() {

	}

	getController(controllers, callback = () => {}) {

        if (!controllers) {
            return callback(null);
        }
        if (!angular.isArray(controllers)) {
            return callback(controllers);
        }

        var res = null;

        angular.forEach(controllers, (controller) => {
            if (res) {
                return;
            }
            if (controller) {
                res = controller;
            }
        });

        return (res) ? callback(res) : callback(null);
	}
}

app.factory('Directive', Directive.getInstance);