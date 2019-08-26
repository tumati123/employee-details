import React, {Component} from 'react';
class TableBody extends Component{
   render()
   {
       const rows = this.props.employees.map((row, index) => {
           return (
               <tr key={index}>
               <td>
                   {row.name}
               </td>
               <td>
                   {row.job}
               </td>
               <td>
                   <button onClick={()=> this.props.removeEmployee(index)}>X</button>
               </td>
               </tr>);

   });
       return(
           <tbody>
             {rows}
           </tbody>)
   }
}

export default TableBody
