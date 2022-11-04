import React, {useState, useEffect, useContext} from 'react'
import Table from 'react-bootstrap/Table';
import "./KeyContactsAndMails.css"
import Datadisplay from '/src/components/DisplayData/DisplayData';

function KeyContactsAndMails() {

  const [Userdata, setUserData] = useState([
        ["501", "Jyothi Swaroop Reddy", "bjsreddy742002@gmail.com", "9849863395", "431/A",  "Swaroop"],
        ["502", "dsgnjsng", "bjsreddy@gmail.com", "2496856069", "433/A",  "Swar"],
        ["503", "eortrotyhmkgj", "bjsredd2002@gmail.com", "2483940403", "432/A",  "op"],
        ["504", "mnmvncvcbn", "bjsreddy742@gmail.com", "1309324892", "430/A",  "Swap"],
    ]);
  const columns = ["Flat No","Owner Name","Email","Mobile Number", "Parking Slot", "Property Registered Name"]
  const [DisplayData, setDisplayData] = useState(Userdata);

//   useEffect(() => {
//     (async () => {
//       const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
//       setUserData(result.data);
//     })();
//   }, []);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if(search === '' || search === null || search === undefined){
      setDisplayData(Userdata);
    }else {
      const data = Userdata.filter((item) => {
        item[0].includes(search);
      })
      setDisplayData(data);
    }
  };

  return (
    <>
      <div style={{ marginTop: "60px", width: "100%" }}>
        <label htmlFor="search">
          Search by Task:
          <input id="search" type="text" onChange={handleSearch} />
        </label>
        <div className="container">
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                {columns.map((ele, index) => (
                  <th key={index}>{ele}</th>
                ))}
              </tr>
            </thead>
            <Datadisplay props={DisplayData}/>
          </Table>
        </div>
      </div>
    </>
    );
  }

export default KeyContactsAndMails;