import { Button, Input, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../store/action';
import Context from '../store/Context';

const FormAdd = ({ dispatch }: { dispatch: any }) => {
  const [title, setTitle] = useState<string>('');

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
    setTitle('');
  };

  const handleClearAllData = () => {
    // dispatch(clearAllTodo());
  };

  return (
    <>
      {/* {!isClick && ( */}
      <Space align='baseline' style={{ width: '100%' }}>
        <Input status='warning' placeholder='Enter Job' type='text' value={title} onChange={(e) => handleChange(e)} />
        <Button onClick={() => handleAdd()}>Add</Button>
        <Button onClick={handleClearAllData}>Clear All</Button>
      </Space>
      {/* )} */}
    </>
  );
};

export default FormAdd;
