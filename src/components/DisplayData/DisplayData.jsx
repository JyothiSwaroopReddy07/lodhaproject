import React, {useState, useEffect, useContext} from 'react'
import Table from 'react-bootstrap/Table';
import './DisplayData.css'

function Datadisplay({props}) {

    return (
        <tbody>
            { props.map((ele,i)=> (
               <tr>
                 <td>{i+1}</td>
                    {ele.map((ele1, index) => (
                      <td key={index}>{ele1}</td>
                    ))}
                <td><button className="btn btn-primary">Edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
              ))
           }
        </tbody>
    );
}
export default Datadisplay;