import { Button, Space } from 'antd';
import React, { useContext } from 'react';
import { DataContext } from '../App';
const ButtonList = () => {
  const { setTitle }: any = useContext(DataContext);

  const filterLastDay = () => {
    setTitle('lastDay');
  };

  const filterToday = () => {
    setTitle('today');
  };

  const filterNextDay = () => {
    setTitle('nextDay');
  };

  const getAll = () => {
    setTitle('all');
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
