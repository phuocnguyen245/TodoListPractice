import 'antd/dist/antd.css';
import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import FormAdd from './component/FormAdd';
import FormList from './component/FormList';
import { ITodo } from './data-models';
const initData = [
  {
    id: uuidv4(),
    title: 'Cooking meal',
    status: 'inprogress',
    createdDay: '12/4/2022',
  },
  {
    id: uuidv4(),
    title: 'Wash the dishes',
    status: 'inprogress',
    createdDay: '13/4/2022',
  },
  {
    id: uuidv4(),
    title: 'Clean the floor',
    status: 'completed',
    createdDay: '20/4/2022',
  },
];

function App() {
  const [data, setData] = useState(initData);

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
    setData(findAndUpdate);
  };

  const handleDelete = (id: string) => {
    const newData = data.filter((item: ITodo) => {
      return item.id !== id;
    });
    setData(newData);
  };

  return (
    <div className="App">
      <div className="container">
        <FormAdd clearAllData={clearAllData} setData={setData} />
        <FormList data={data} handleDelete={handleDelete} handleChangeStatus={handleChangeStatus} />
      </div>
    </div>
  );
}

export default App;
