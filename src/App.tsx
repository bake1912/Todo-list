import React, { useState } from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button, Modal, Input } from 'antd';
const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: ' NewYork No. 1 Lake Park,'
  },
]

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [adress, setAdress] = useState('');
  const [array, setArray] = useState<any[]>(data);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [countKey, setCountKey] = useState(2);

  const dataUpdate = {
    key: countKey,
    name: name,
    age: age,
    address: adress

  };

  const showModalAdd = () => {
    setIsModalAddOpen(true);
  };
  enum Exceptions{
    NAME,
    AGE,
    ADRESS="k"
  }

  const handleAddOk = () => {
    const exceptionArray = [];
    enum exceptions { "name"
    ,
     "age",
      "adress" };//



    name == "" ? exceptionArray.push(exceptions[0])
      : exceptionArray.push();
    age < 1 || Number.isNaN(age) ? exceptionArray.push(exceptions[1])
      : exceptionArray.push();
    adress == "" ? exceptionArray.push(exceptions[2])
      : exceptionArray.push();
      
    if (exceptionArray.length == 0) {
      setCountKey(countKey+1);
      addUser();
      setIsModalAddOpen(false);
    }
    else {
      alert(`You forgot to enter: ${exceptionArray}`);
    }
  };

  const handleEditOk = () => {
    setArray(array => {
      return array.map(user => {
        if (user.key === editingUser.key) {
          return editingUser;
        }
        else {
          return user;
        }
      })
    })
    setIsModalEditOpen(false);
  };

  const handleAddCancel = () => {
    setIsModalAddOpen(false);
  };

  const handleEditCancel = () => {
    setIsModalEditOpen(false);
  };

  const addUser = () => {
    setArray([...array, dataUpdate]);
  }

  const deleteUser = (record: any ) => {
    Modal.confirm({
      title: `Are you sure to delete ${record.name} ?`,
      okType: 'danger',
      onOk: () => setArray(array => {
        return array.filter(
          user => user.key != record.key);
      })
    })
  }

  const editUser = (record: string[]) => {
    setIsModalEditOpen(true);
    setEditingUser({ ...record });
  }
  type DataType = {
    key: number;
    name: string;
    age: number;
    address: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {

      title: 'Age',
      dataIndex: 'age',
      key: age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },

    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <a onClick={() => {
            editUser(record)
          }} >Edit</a>
          <a onClick={() => {
            deleteUser(record)
          }} >Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} pagination={{ pageSize: 3 }}
        dataSource={array} />
      <Button type="primary"
        onClick={showModalAdd}>
        Add
      </Button>
      <Modal okText="Add"
        title="Adding a new user"
        open={isModalAddOpen}
        onOk={handleAddOk}
        onCancel={handleAddCancel}>
        <Input placeholder='name'
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          name='Name: ' />
        <Input placeholder='age'
          value={age}
          onChange={(e) => { setAge(parseInt(e.target.value)) }}
          name='age: ' />
        <Input placeholder='adress'
          value={adress}
          onChange={(e) => { setAdress(e.target.value) }}
          name='Adress: ' />
      </Modal>

      <Modal title="Editing the user"
        okText="Edit"
        open={isModalEditOpen}
        onOk={handleEditOk}
        onCancel={handleEditCancel}>
        <Input placeholder='name'
          value={editingUser?.name}
          onChange={(e) => {
            setEditingUser((array: string[]) => {
              return { ...array, name: e.target.value }
            }
            )
          }}
          name='Name: ' />
        <Input placeholder='age'
          value={editingUser?.age}
          onChange={(e) => {
            setEditingUser((array: string[]) => {
              return { ...array, age: parseInt(e.target.value) }
            })
          }}
          name='age: ' />
        <Input placeholder='adress'
          value={editingUser?.address}
          onChange={(e) => {
            setEditingUser((array: string[]) => {
              return { ...array, address: e.target.value }
            })
          }}
          name='Adress: ' />
      </Modal>
    </>
  );
};

export default App;








