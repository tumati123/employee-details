import React from 'react';
class Form extends React.Component {
    constructor(props){
        super(props);
        this.initialState = {
            name: '',
            job: ''
        };
        this.state = this.initialState;
    }

    handleChange = (e) => {
      const {name, value} = e.target;
      this.setState({
              [name] : value
      })


    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.manageEmployee(this.state);
      this.setState(this.initialState);
    };

   render() {
       const {name, job} = this.state;
       return (
           <form>
               <div className="form-group">
                   <label>Name</label>
                   <input type="text" className="form-control"
                          placeholder="Enter Name"
                   name="name"
                   value={name}
                   onChange={this.handleChange}/>
               </div>
               <div className="form-group">
                   <label>Job</label>
                   <input type="password" className="form-control"  placeholder="Enter Job"
                   name="job"
                   value={job}
                   onChange={this.handleChange}/>
               </div>
               <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
           </form>
       );
   }
}

export default Form;
