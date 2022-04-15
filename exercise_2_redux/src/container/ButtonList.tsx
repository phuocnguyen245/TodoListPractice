import { Button, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTodo } from '../redux/todoSlice';

const ButtonList = () => {
  const dispatch = useDispatch();

  const filterLastDay = () => {
    dispatch(filterTodo('lastDay'));
  };

  const filterToday = () => {
    dispatch(filterTodo('today'));
  };

  const filterNextDay = () => {
    dispatch(filterTodo('nextDay'));
  };

  const getAll = () => {
    dispatch(filterTodo('all'));
  };

  return (
    <Space align='baseline' style={{ margin: '20px auto' }}>
      <Button onClick={filterLastDay}>Last Day</Button>
      <Button onClick={filterToday}>Today</Button>
      <Button onClick={filterNextDay}>Next day</Button>
      <Button onClick={getAll}>All day</Button>
    </Space>
  );
};

export default ButtonList;
