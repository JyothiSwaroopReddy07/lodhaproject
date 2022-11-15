import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { userColumns } from "./columns";
import { useTableSearch } from "./useTableSearch";
import './KeyContactsAndMails.css';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'
const { Search } = Input;

const fetchUsers = async () => {
  const { data } = await axios.get(
    "http://localhost:4000/api/v1/users/"
  );
  const users = data.users;
  console.log(users);
  return users;
};

export default function KeyContactsAndMails() {
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers
  });

  return (
    <>
    <LoginNavBar />
    <div className="KeyContactDiv">
      <p id="title">KEY CONTACTS AND MAILS</p>
      <div style={{ marginLeft: "5px", height: "3px", width: "300px", backgroundColor: "gold" }}></div>
      
      <Search
        onChange={e => setSearchVal(e.target.value)}
        placeholder="Enter Flat No"
        enterButton
        style={{ position: "sticky", top: "0", left: "0" }}
      />
      
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={userColumns}
        loading={loading}
        pagination={false}
      />
      </div>
    </>
  );
}
