import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../App';
import { IContext, IUser } from '../data-models';
import ButtonList from './ButtonList';
import FormAdd from './FormAdd';
import FormList from './FormList';
const today = new Date();

const TodoList = () => {
  const { data, btnDetail }: any = useContext(DataContext);
  console.log(data);

  const [todoList, setTodoList] = useState(data);

  useEffect(() => {
    if (btnDetail.title === 'Today') {
      const filter = data.map((todo: any) => {
        if (todo.user_Id === btnDetail.id) {
          const a = todo.todoList.filter((l: any) => {
            return l.createdDay === today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
          });
          return { ...todo, todoList: a };
        }
        return { ...todo };
      });
      setTodoList(filter);
    } else if (btnDetail.title === 'Last day') {
      const filter = data.map((todo: any) => {
        if (todo.user_Id === btnDetail.id) {
          const a = todo.todoList.filter((l: any) => {
            return l.createdDay < today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
          });
          return { ...todo, todoList: a };
        }
        return { ...todo };
      });
      setTodoList(filter);
    } else if (btnDetail.title === 'Next day') {
      const filter = data.map((todo: any) => {
        if (todo.user_Id === btnDetail.id) {
          const a = todo.todoList.filter((l: any) => {
            return l.createdDay > today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
          });
          return { ...todo, todoList: a };
        }
        return { ...todo };
      });
      setTodoList(filter);
    } else {
      setTodoList(data);
    }
  }, [btnDetail, data]);

  return (
    <>
      {todoList.map((todo: IUser) => (
        <>
          <FormAdd user_Id={todo.user_Id} />
          <ButtonList user_Id={todo.user_Id} />
          <FormList user_Id={todo.user_Id} todoList={todo.todoList} />
        </>
      ))}
    </>
  );
};

export default TodoList;
