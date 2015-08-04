function Person(first, last) {
    this.firstName = first;
    this.lastName =  last;
};

var InputArea = React.createClass({
	getInitialState: function() {
		return {
			firstName: '',
			lastName: ''
		};
	},
	
	onClick: function() {
		this.props.addPerson(this.state.firstName, this.state.lastName);
	},
	
	changeFirstName: function(e) {
		this.setState({firstName: e.target.value});
	},
	
	changeLastName: function(e) {
		this.setState({lastName: e.target.value});
	},
	
	render: function() {
		var fullName = this.state.firstName + ' ' + this.state.lastName;
		return <div id="input-panel" className="panel-body">
                 <p>FirstName: <input value={this.state.firstName} className="form-control" onChange={this.changeFirstName}/></p>
                 <p>LastName: <input value={this.state.lastName} className="form-control" onChange={this.changeLastName}/></p>
                 <p>FullName: {fullName}</p>
                 <button className="btn" onClick={this.onClick}>create</button>
               </div>;
	}
});

var PersonsArea = React.createClass({
	
	getInitialState: function() {
		return {
			persons: []
		};
	},
	
	componentDidMount: function() {
		var self = this;
		$.getJSON('api/persons', function(jsons) {
			for(var i = 0; i < jsons.length; ++i) {
				var json = jsons[i];
				self.addPerson(json.firstName, json.lastName);				
			}
		});
	},
	
	addPerson: function(firstName, lastName) {
		var p = new Person(firstName, lastName);
		var ps = this.state.persons;
		ps.push(p);
		this.setState({persons: ps});		
	},
	
	render: function() {
		var ps = this.state.persons;
		
		var tbody = ps.map(function(p, idx) {
			return <tr key={idx}><td>{p.firstName}</td><td>{p.lastName}</td></tr>;			
		});

		return <div>
		         <InputArea addPerson={this.addPerson}/>
                 <div id="persons-panel">
  		           <table className="table table-striped table-bordered">
	                 <thead>
	                   <tr><th>FirstName</th><th>LastName</th></tr>
	                 </thead>
	                 <tbody>
	                 {tbody}
	                 </tbody>
	               </table>
	             </div>
	           </div>;
	}	
});

React.render(
    <PersonsArea/>,
    $('#contentArea').get(0)
);
