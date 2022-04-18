import 'antd/dist/antd.css';
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import ButtonList from './container/ButtonList';
import FormAdd from './container/FormAdd';
import FormList from './container/FormList';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from './data-models';
import TodoList from './container/TodoList';

const today = new Date();

const initData = [
  {
    user_Id: 1,
    todoList: [
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
    ],
  },
  {
    user_Id: 2,
    todoList: [
      {
        id: uuidv4(),
        title: 'Play food ball',
        status: 'inprogress',
        createdDay: today.getDate() - 1 + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
      },
      {
        id: uuidv4(),
        title: 'Read a book',
        status: 'notStart',
        createdDay: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
      },
      {
        id: uuidv4(),
        title: 'Join a social club',
        status: 'completed',
        createdDay: today.getDate() + 1 + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
      },
    ],
  },
];
export const DataContext = createContext({});
function App() {
  const [data, setData] = useState(initData);
  const [btnDetail, setBtnDetail] = useState({
    id: 0,
    title: '',
  });

  const handleFilter = (id: number, title: string) => {
    const data = { id, title };
    setBtnDetail(data);
  };

  const handleAdd = (id: number, title: string) => {
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const newTodo: ITodo = {
      id: uuidv4(),
      title,
      status: 'notStart',
      createdDay: date,
    };
    const addTodo = data.map((d) => {
      if (d.user_Id === id) {
        return { ...d, todoList: [...d.todoList, newTodo] };
      }
      return { ...d };
    });
    setData(addTodo);
  };

  const handleChangeStatus = (status: string, id: string, user_Id: string) => {
    const updateStatus = data.map((d: any) => {
      if (d.user_Id === user_Id) {
        d.todoList.map((l: any) => {
          if (l.id === id) {
            l.status = status;
          }
          return { ...l };
        });
      }
      return { ...d };
    });
    setData(updateStatus);
  };

  const handleDelete = (id: string, user_Id: number | string) => {
    const deleteData = data.map((d: any) => {
      if (d.user_Id === user_Id) {
        const restData = d.todoList.filter((l: any) => {
          return l.id !== id;
        });
        return { ...d, todoList: restData };
      }
      return { ...d };
    });
    setData(deleteData);
  };

  const handleClear = (user_Id: number) => {
    const clear = data.map((d: any) => {
      if (d.user_Id === user_Id) {
        return (d.todoList = []);
      }
      return { ...d };
    });
    setData(clear);
  };

  return (
    <div className='App'>
      <DataContext.Provider value={{ data, setData, handleFilter, btnDetail, handleAdd, handleChangeStatus, handleDelete, handleClear }}>
        <TodoList />
      </DataContext.Provider>
    </div>
  );
}

export default App;
