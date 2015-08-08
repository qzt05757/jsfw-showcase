window.App = Ember.Application.create();

App.Router.map(function() {
	this.route('hello', {path: '/'});
});

App.HelloRoute = Ember.Route.extend({
    model: function() {
        return {
        	persons: []
        };
    }
});

App.HelloController = Ember.Controller.extend({
	inputFirstName: '',
	inputLastName: '',
	inputFullName: function() {
		return this.get('inputFirstName') + ' ' + this.get('inputLastName');
	}.property('inputFirstName', 'inputLastName'),

	init: function() {
		var self = this;
		$.getJSON("api/persons", function(ps) {
			for(var i = 0; i<ps.length; ++i) {
				var p = ps[i];
				self.addPerson(p.firstName, p.lastName);
			}
		});
	},

	addPerson: function(firstName, lastName) {
		var p = { firstName: firstName, lastName: lastName};
		this.model.persons.pushObject(p);		
	},
	
	actions: {
		create: function() {
			var firstName = this.get('inputFirstName');
			var lastName = this.get('inputLastName');
			this.addPerson(firstName, lastName);
		}
	},
});