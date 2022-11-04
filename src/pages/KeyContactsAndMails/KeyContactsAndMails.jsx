import React, {useState, useEffect, useContext} from 'react'
import "./KeyContactsAndMails.css"
import { useTable } from "react-table";

function KeyContactsAndMails() {

  const [Userdata, setUserData] = useState([
        ["501", "Jyothi Swaroop Reddy", "bjsreddy742002@gmail.com", "9849863395", "431/A",  "Swaroop"],
        ["502", "dsgnjsng", "bjsreddy@gmail.com", "2496856069", "433/A",  "Swar"],
        ["503", "eortrotyhmkgj", "bjsredd2002@gmail.com", "2483940403", "432/A",  "op"],
        ["504", "mnmvncvcbn", "bjsreddy742@gmail.com", "1309324892", "430/A",  "Swap"],
    ]);
  const columns = ["Flat No","Owner Name","Email","Mobile Number", "Parking Slot", "Property Registered Name"]

//   useEffect(() => {
//     (async () => {
//       const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
//       setUserData(result.data);
//     })();
//   }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, Userdata });

  return (
    <>
        <table {...getTableProps()}>
        <thead>
            {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
            prepareRow(row);
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
                </tr>
            );
            })}
        </tbody>
        </table>
    </>
  );
}

export default KeyContactsAndMails;