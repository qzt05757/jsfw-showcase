function Person(first, last) {
  this.firstName = first;
  this.lastName =  last;
};

var Persons = Backbone.Model.extend({});
persons = new Persons({
	inputFirstName : "",
	inputLastName : "",
	persons: [],
	addPerson: function(p) {
		this.persons.push(p);
	},
	create: function() {
		var p = ner Person(this.inputFirstName, this.inputLastName);
	}
});

var PersonsView = Backbone.View.extend({
	el: '#person',
	events: {
		'change': 'change'
	},
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	change: function() {

	},
	render: function() {		

	}
});

var personsView = new PersonView({model: persons});
