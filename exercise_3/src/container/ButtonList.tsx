import { Button, Space } from 'antd';
import React, { useContext } from 'react';
import { DataContext } from '../App';

const btnTitle: string[] = ['Last day', 'Today', 'Next day', 'All day'];
const ButtonList = ({ user_Id }: any) => {
  const { handleFilter }: any = useContext(DataContext);

  const onFilter = (id: number, title: string) => {
    handleFilter(id, title);
  };

  return (
    <Space align='baseline' style={{ margin: '20px auto' }}>
      {btnTitle.map((title: any) => (
        <Button onClick={() => onFilter(user_Id, title)}>{title}</Button>
      ))}
    </Space>
  );
};

export default ButtonList;
