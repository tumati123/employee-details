import React, {Component} from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
    render(){
        if ( this.props.employees.length <= 0){
            return null;
        }
        return (


                    <table className="table">
                        <TableHeader/>
                        <TableBody employees={this.props.employees} removeEmployee={this.props.removeEmployee}/>
                    </table>
        );
    }
}

export default Table
