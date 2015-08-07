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
	this.addPerson = function(firstName, lastName) {
		var p = { firstName: firstName, lastName: lastName};
		this.persons.push(p);
	}
	this.create = function() {
		this.addPerson(this.inputFirstName(), this.inputLastName());
	}
};

var persons = new Persons();

var init = function() {
	$.getJSON("api/persons", function(ps) {
		for(var i = 0; i<ps.length; ++i) {
			var p = ps[i];
			persons.addPerson(p.firstName, p.lastName);
		}
	});
};

init();
ko.applyBindings(persons);

