function Person(first, last) {
    this.firstName = first;
    this.lastName =  last;
};

var InputArea = React.createClass({
	render: function() {
		return <div id="input-panel" className="panel-body">
                 <p>FirstName: <input id="firstName" className="form-control"/></p>
                 <p>LastName: <input id="lastName" className="form-control"/></p>
                 <p>FullName: <span id="fullName"></span></p>
                 <button id="create" className="btn">create</button>
               </div>;
	}
});

var PersonsArea = React.createClass({
	render: function() {
		return <div className="persons-area">
	             <table className="table table-striped table-bordered">
	               <thead>
	                 <tr><th>FirstName</th><th>LastName</th></tr>
	               </thead>
	               <tbody>
	               </tbody>
	             </table>
	           </div>;
	}	
});

var HelloApplication = React.createClass({
    render: function() {
      return <div>
               <InputArea/>
               <PersonsArea/>
             </div>;
    }
});

React.render(
    <HelloApplication/>,
    $('#container').get(0)
);
