function Person(first, last) {
  this.firstName = first;
  this.lastName =  last;
};

function Persons() {
	this.inputFirstName = ko.observable("");
	this.inputLastName = ko.observable("");
	this.inputFullName = ko.computed(function(){
		return this.inputFirstName() + " " + this.inputLastName();
	}, this);
	this.persons = ko.observableArray([]);
	this.addPerson = function(p) {
		this.persons.push(p);
	}
	this.create = function() {
		var p = new Person(this.inputFirstName(), this.inputLastName());
		this.addPerson(p);
	}
};

var persons = new Persons();

var init = function() {
	$.getJSON("api/persons", function(ps) {
		for(var i = 0; i<ps.length; ++i) {
			var p = ps[i];
			persons.addPerson(new Person(p.firstName, p.lastName));
		}
	});
};

init();
ko.applyBindings(persons);

