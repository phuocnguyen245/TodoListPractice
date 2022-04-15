import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import FormAdd from './comtainer/FormAdd';
import FormList from './comtainer/FormList';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <FormAdd />
        <FormList />
      </div>
    </div>
  );
}

export default App;
