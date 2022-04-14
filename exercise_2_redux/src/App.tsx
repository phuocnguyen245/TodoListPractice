import 'antd/dist/antd.css';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import FormAdd from './comtainer/FormAdd';
import FormList from './comtainer/FormList';
import { ITodo } from './data-models';
import { RootState } from './redux/store';
const today = new Date();

function App() {
  const [data, setData] = useState([]);

  const clearAllData = useCallback(() => {
    return setData([]);
  }, []);

  const handleChangeStatus = (value: string, id: string) => {
    const findAndUpdate = data.map((item: ITodo) => {
      if (item.id === id) {
        return { ...item, status: value };
      }
      return { ...item };
    });
    // setData(findAndUpdate);
  };
  console.log(data);

  const handleDelete = (id: string) => {
    const newData = data.filter((item: ITodo) => {
      return item.id !== id;
    });
    setData(newData);
  };

  return (
    <div className='App'>
      <div className='container'>
        <FormAdd />
        <FormList data={data} handleDelete={handleDelete} handleChangeStatus={handleChangeStatus} />
      </div>
    </div>
  );
}

export default App;
