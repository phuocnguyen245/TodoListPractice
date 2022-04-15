import { Button, Input, Space } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, clearAllTodo } from '../redux/todoSlice';

const FormAdd = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
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
    dispatch(addTodo(newTitle));
  };

  const handleClearAllData = () => {
    dispatch(clearAllTodo());
  };

  return (
    <Space align='baseline' style={{ width: '100%' }}>
      <Input status='warning' placeholder='Enter Job' type='text' value={title} onChange={(e) => handleChange(e)} />
      <Button onClick={() => handleAdd()}>Add</Button>
      <Button onClick={handleClearAllData}>Clear All</Button>
    </Space>
  );
};

export default FormAdd;

