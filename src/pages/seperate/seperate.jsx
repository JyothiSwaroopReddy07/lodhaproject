import React, { useContext, useEffect, useRef, useState } from "react"
import "antd/dist/antd.css"
import "./seperate.css"
import { Form, Input, Popconfirm, Table } from "antd"
import axios from "axios"
import { useTableSearch } from "./useTableSearch"
import LoginNavBar from "/src/components/LoginNavBar/LoginNavBar"
import "antd/dist/antd.css"
const { Search } = Input

const EditableContext = React.createContext(null)

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)
  const form = useContext(EditableContext)

  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])

  const toggleEdit = () => {
    setEditing(!editing)
    form.setFieldsValue({ [dataIndex]: record[dataIndex] })
  }

  const save = async () => {
    try {
      const values = await form.validateFields()

      toggleEdit()
      handleSave({ ...record, ...values })
    } catch (errInfo) {
      console.log("Save failed:", errInfo)
    }
  }

  let childNode = children

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`
          }
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    )
  }

  return <td {...restProps}>{childNode}</td>
}







/*******************************************Component************************************************ */







const Seperate = () => {

  const [dataSource, setDataSource] = useState([])
  const [searchVal, setSearchVal] = useState("")
  const { filteredData, loading } = useTableSearch({
    searchVal,
    dataSource
  })

  const fetchUsers = async () => {
    const { data } = await axios.get("http://localhost:4000/api/v1/users/")
    const users = data.users
    console.log(users);
    setDataSource(users);
    return users
  }
  useEffect(async ()=>{
    const data = await fetchUsers();
    console.log("Data", data);
    setDataSource(data);
  },[dataSource.length])

  
  const [count, setCount] = useState(2)

  const handleDelete = key => {
    console.log("key", key)
    const newData = dataSource.filter(item => item.FlatNo !== key)
    setDataSource(newData)
  }

  const defaultColumns = [
    {
      title: "Flat Number",
      dataIndex: "FlatNo",
      key: "FlatNo",
      editable: true
    },
    {
      title: "Owner Name",
      dataIndex: "OwnerName",
      key: "OwnerName",
      editable: true
    },
    {
      title: "Property Registered Name",
      dataIndex: "RegisteredName",
      key: "RegisteredName",
      editable: true
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
      editable: true
    },
    {
      title: "Mobile Number",
      dataIndex: "Mobile",
      key: "Mobile",
      editable: true
    },
    {
      title: "Block",
      dataIndex: "Block",
      key: "Block",
      editable: true
    },
    {
      title: "Parking Slot",
      dataIndex: "ParkingSlot",
      key: "ParkingSlot",
      editable: true
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 0 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.FlatNo)}
          >
            <button className="btn btn-danger">Delete</button>
          </Popconfirm>
        ) : null
    }
  ]

  const handleSave = row => {
    const newData = [...dataSource]
    const index = newData.findIndex(item => row.FlatNo === item.FlatNo)
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row
    })
    setDataSource(newData)
  }

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  }

  const columns = defaultColumns.map(col => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave
      })
    }
  })

  return (
    // <div>
    //   <Table
    //     components={components}
    //     rowClassName={() => 'editable-row'}
    //     bordered
    //     dataSource={dataSource}
    //     columns={columns as ColumnTypes}
    //   />
    // </div>
    <>
      <LoginNavBar />
      <div className="KeyContactDiv">
        <p id="title">KEY CONTACTS AND MAILS</p>
        <div
          style={{
            marginLeft: "5px",
            height: "3px",
            width: "300px",
            backgroundColor: "gold"
          }}
        ></div>

        <Search
          onChange={e => setSearchVal(e.target.value)}
          placeholder="Enter Flat No"
          enterButton
          size="large"
          style={{
            width: "90%",
            marginTop: "20px",
            border: "1px solid black",
            borderRadius: "5px"
          }}
        />

        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          rowKey="name"
          dataSource={dataSource}
          columns={columns}
          loading={loading}
          pagination={false}
          style={{
            marginTop: "20px",
            width: "90%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            backgroundColor: "black !important"
          }}
        />
      </div>
      <div style={{ height: "100px", color: "white" }}></div>
    </>
  )
}

export default Seperate
