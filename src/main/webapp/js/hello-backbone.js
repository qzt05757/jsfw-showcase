var InputModel = Backbone.Model.extend({});

var inputModel = new InputModel({
	'firstName': '',
	'lastName': ''
});

var InputView = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },
    events: {
        'change': 'updateModel',
        'click button#create': 'createPerson'
    },
    updateModel: function() {
        var firstName = this.$el.find('#firstName').val();
        var lastName = this.$el.find('#lastName').val();
        this.model.set({'firstName': firstName, 'lastName': lastName});
    },
    render: function() {
        var firstName = this.model.get('firstName');
        var lastName = this.model.get('lastName');
        var fullName = firstName + ' ' + lastName;
        this.$el.find('#firstName').val(firstName);
        this.$el.find('#lastName').val(lastName);
        this.$el.find('#fullName').text(fullName);
    },
    createPerson: function() {
        this.updateModel();
        var p = { firstName: this.model.get('firstName'), lastName: this.model.get('lastName') };
        personsModel.add(p); 
    },
});
var inputView = new InputView({
    el   : $('#input-panel'),
    model: inputModel
});

var PersonsModel = Backbone.Collection.extend({
    url: 'api/persons',
	parse: function(jsons) {
        var ret = [];
        for(var i = 0; i < jsons.length; ++i) {
		    var json = jsons[i];
		    var p = {firstName: json.firstName, lastName: json.lastName};
		    ret.push(p);
        }
		return ret;
    }
});
var personsModel = new PersonsModel();

var PersonsView = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.model, 'add', this.render);
        this.renderAll();
    },
    renderAll: function() {
    	this.model.each(function(x) {
    		this.render()
    	});
    	for(var i = 0; i < this.model.length; ++i) {
    		var m = model.at(i);
    		this.render(m);    		
    	}
    },
    render: function(add) {
        var $div = this.$el;
        var $tbody = $div.find('table tbody');
        var html = "<tr><td>" + add.get('firstName') + "</td><td>" + add.get('lastName') + "</td></tr>";
        $tbody.append(html);
    }
});
var personView = new PersonsView({
    el: $('#persons-panel'),
    model: personsModel
});

personsModel.fetch().success(function(col, res, opts) { });
