import { Button, Input, Space } from 'antd';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../data-models';

interface IProps {
  clearAllData: () => void;
  setData: (data: any) => void;
}
const FormAdd = ({ clearAllData, setData }: IProps) => {
  const [title, setTitle] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const newTitle = {
      id: uuidv4(),
      title,
      status: 'notStart',
      createdDay: date,
    };
    setData((prev: ITodo[]) => [...prev, newTitle]);
    setTitle('');
  };

  return (
    <Space align='baseline' style={{ width: '100%' }}>
      <Input status='warning' placeholder='Enter Job' type='text' value={title} onChange={(e) => handleChange(e)} />
      <Button onClick={() => handleAdd()}>Add</Button>
      <Button onClick={clearAllData}>Clear All</Button>
    </Space>
  );
};

export default FormAdd;
