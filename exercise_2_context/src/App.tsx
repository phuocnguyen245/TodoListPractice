import 'antd/dist/antd.css';
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import ButtonList from './container/ButtonList';
import FormAdd from './container/FormAdd';
import FormList from './container/FormList';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from './data-models';

export const DataContext = createContext({});
const today = new Date();
const initData: ITodo[] = [
  {
    id: uuidv4(),
    title: 'Cooking meal',
    status: 'completed',
    createdDay: today.getDate() - 1 + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
  },
  {
    id: uuidv4(),
    title: 'Wash the dishes',
    status: 'inprogress',
    createdDay: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
  },
  {
    id: uuidv4(),
    title: 'Clean the floor',
    status: 'notStart',
    createdDay: today.getDate() + 1 + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
  },
];

function App() {
  const [data, setData] = useState<ITodo[]>(initData);

  const [title, setTitle] = useState<string>('');

  return (
    <DataContext.Provider value={{ data, setData, title, setTitle }}>
      <div className='App'>
        <FormAdd />
        <ButtonList />
        <FormList />
      </div>
    </DataContext.Provider>
  );
}

export default App;
