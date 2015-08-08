var model = new Ractive({
    el: '#container',
    template: '#hello',
    data: { 
    	inputFirstName: '',
    	inputLastName: '',
    	inputFullName: '',
    	persons: []
    },
    
    addPerson: function(firstName, lastName) {
    	var p = {firstName: firstName, lastName: lastName};
    	this.get('persons').push(p);
    },

    onrender: function() {
    	var self = this;
    	
    	this.observe('inputFirstName inputLastName', function() {
    		var f = this.get('inputFirstName');
    		var l = this.get('inputLastName');
    		this.set('inputFullName', f + ' ' + l);
    	});
    	
    	this.on('create', function(e) {
    		var f = this.get('inputFirstName');
    		var l = this.get('inputLastName');
    		self.addPerson(f, l);    		
    	});
    	
		$.getJSON("api/persons", function(ps) {
			for(var i = 0; i<ps.length; ++i) {
				var p = ps[i];
				self.addPerson(p.firstName, p.lastName);
			}
		});
    }
});

