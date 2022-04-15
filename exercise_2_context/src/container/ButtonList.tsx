import { Button, Space } from 'antd';
import React from 'react';


const ButtonList = () => {
  return (
    <Space align='baseline' style={{ margin: '20px auto' }}>
      <Button>Last Day</Button>
      <Button>Today</Button>
      <Button>Next day</Button>
      <Button>All day</Button>
    </Space >
  );
};

export default ButtonList;
