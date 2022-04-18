import { Button, Input, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { DataContext } from '../App';

const FormAdd = ({ user_Id }: any) => {
  const { handleAdd, handleClear }: any = useContext(DataContext);

  const [title, setTitle] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onAdd = (id: number) => {
    handleAdd(id, title);
    setTitle('');
  };

  const onClear = (id: number) => {
    handleClear(id);
  };

  return (
    <>
      <Space align='baseline' style={{ width: '100%' }}>
        <Input status='warning' placeholder='Enter Job' type='text' value={title} onChange={(e) => handleChange(e)} />
        <Button onClick={() => onAdd(user_Id)}>Add</Button>
        <Button onClick={() => onClear(user_Id)}>Clear All</Button>
      </Space>
    </>
  );
};

export default FormAdd;
