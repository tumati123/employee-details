import React from 'react';
import Table from './table'
import Form from './Form'
class App extends React.Component {
    state = {
        employees: [

    ]};

    removeEmployee= index => {
        const { employees } = this.state;

        this.setState({
            employees: employees.filter((character, i) => {
                return i !== index;
            })
        });
    };

    manageEmployee = employee => {
        console.log('fsfaf',employee);
      this.setState( { employees: [employee, ...this.state.employees]})
    };

    render() {
        return(
            <div>
                <Table employees={this.state.employees} removeEmployee={this.removeEmployee}/>
                <Form manageEmployee={this.manageEmployee}/>
            </div>
        )
    }
}

export default App
