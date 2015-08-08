var demo = new Vue({
  el: '#hello',
  data: {
    inputFirstName: '',
    inputLastName: '',
    persons: []
  },
  computed: {
	inputFullName: {
      get: function() {
        return this.inputFirstName + ' ' + this.inputLastName;
      }
	}
  },
  methods: {
    create: function(e) {
      var f = this.inputFirstName;
      var l = this.inputLastName;
      this.addPerson(f, l);
    },
    addPerson: function(f, l) {
  	  var p = {firstName: f, lastName: l};
  	  this.persons.push(p);
    }  
  },
  created: function() {
	  var self = this;
	  $.getJSON('api/persons').success(function(ps) {
		  for(var i = 0; i < ps.length; ++i) {
			  var p = ps[i];
			  self.addPerson(p.firstName, p.lastName);
		  }
	  });	  
  },
});