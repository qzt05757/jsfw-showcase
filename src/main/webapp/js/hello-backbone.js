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
	id: 'input-panel',
	events: {
		'change', 'updateModel'
	},	
    updateModel: function(){
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        this.model.set({firstName: firstName, lastName: lastName});
    },
	render: function() {
		var firstName = this.model.get('firstName');
		var lastName = this.model.get('lastName');
		var fullName = firstName + ' ' + lastName;
        this.$('#firstName').val(firstName);
        this.$('#lastName').val(lastName);
        this.$('#fullName').text(fullName);
	},
	create: function() {
		
	}	
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
	id: 'persons-panel',
	render: function() {
		
	}
});

personsModel.fetch().success(function(col, res, opts) {
	col.trigger('onFetch');
});


