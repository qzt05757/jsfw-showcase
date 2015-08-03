function Person(first, last) {
  this.firstName = first;
  this.lastName =  last;
};

var InputModel = Backbone.Model.extend({
	firstName: "",
	lastName: "",
	create: function() {
		var p = new Person(firstName, lastName);
		personsModel.add(p);
	}
});
var inputModel = new InputModel({});

var InputView = Backbone.View.extend({ });
var inputView = new InputView({
	id: 'input-panel'
});

var PersonsModel = Backbone.Collection.extend({
	url: '/api/persons',
	parse: function(jsons) {
		var ret = [];
		for(var i = 0; i < jsons.length; ++i) {
			var json = jsons[i];
			var p = new Person(json.firstName, json.lastName);
			ret.push(p);
		}
		return ret;
	}
});
var personsModel = new PersonsModel();

var PersonsView = Backbone.View.extend({ });
var personView = new PersonsView({
	id: 'persons-panel'	
});

personsModel.fetch().success(function(col, res, opts) {
	col.trigger('onFetch');
});


