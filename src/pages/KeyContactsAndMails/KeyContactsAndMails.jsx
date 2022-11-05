import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

function KeyContactsAndMails() {
  const [searchVal, setSearchVal] = useState(null);
  const UserData = [
    ["501", "Jyothi Swaroop Reddy", "bjsreddy742002@gmail.com", "9849863395", "431/A",  "Swaroop"],
    ["502", "dsgnjsng", "bjsreddy@gmail.com", "2496856069", "433/A",  "Swar"],
    ["503", "eortrotyhmkgj", "bjsredd2002@gmail.com", "2483940403", "432/A",  "op"],
    ["504", "mnmvncvcbn", "bjsreddy742@gmail.com", "1309324892", "430/A",  "Swap"],
  ];
  const userColumns = ["Flat No", "Owners Name", "Email", "Phone", "ParkingSlot", "Property Registered Name"];

  const [value, setValue] = useState('');
  const [dataSource, setDataSource] = useState(UserData);
  const [tableFilter, setTableFilter]= useState([]);

  const filterData = (e) => {
    if(e.target.value!== ''){
      setValue(e.target.value);
      const filterTable = dataSource.filter((ele)=>{
        if(ele[0].indexOf(value)>=0){
          return true;
        }
        return false;
      })
      console.log(filterData);
      setTableFilter([...filterTable]);
    }
    else{
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  }

  return (
    <>
      <div style={{marginTop: "60px"}}>
        <div className="container mt-5">
          <br/><br/>
          <div className="input-group mt-5 mb-3">
              <input style={{height:"30px"}} type="text" className="form-control" placeholder="search flat number" aria-describedby="basic-addon1" aria-label="Username" value={value} onChange={filterData} />
          </div>
          <Table responsive >
            <thead>
              <tr>
                <th>#</th>
                {userColumns.map((ele, index) => (
                  <th key={index}>{ele}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                value.length > 0 ? tableFilter.map((ele,i)=> {
                  return (<tr>
                    <td>{i+1}</td>
                    {ele.map((ele1, index) => (
                      <td key={index}>{ele1}</td>
                    ))}
                    <td><button className="btn btn-primary">Edit</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                  </tr>)
                }): dataSource.map((ele,i)=> {
                  return (<tr>
                    <td>{i+1}</td>
                    {ele.map((ele1, index) => (
                      <td key={index}>{ele1}</td>
                    ))}
                    <td><button className="btn btn-primary">Edit</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                  </tr>)
                })
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>

  );
}

export default KeyContactsAndMails;
