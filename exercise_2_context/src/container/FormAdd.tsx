import { Button, Input, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DataContext } from '../App';
import { ITodo } from '../data-models';

const FormAdd = () => {
  const { data, setData }: IContext = useContext(DataContext);
  const [title, setTitle] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const newTitle: ITodo = {
      id: uuidv4(),
      title,
      status: 'notStart',
      createdDay: date,
    };
    const newData: ITodo[]= [...data, newTitle];
    setData(newData);
    setTitle('');
  };

  const handleClearAllData = () => {
    setData([])
  };

  return (
    <>
      <Space align='baseline' style={{ width: '100%' }}>
        <Input status='warning' placeholder='Enter Job' type='text' value={title} onChange={(e) => handleChange(e)} />
        <Button onClick={() => handleAdd()}>Add</Button>
        <Button onClick={handleClearAllData}>Clear All</Button>
      </Space>
    </>
  );
};

export default FormAdd;
