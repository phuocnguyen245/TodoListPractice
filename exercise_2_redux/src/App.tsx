import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import ButtonList from './container/ButtonList';
import FormAdd from './container/FormAdd';
import FormList from './container/FormList';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <FormAdd />
        <ButtonList />
        <FormList />
      </div>
    </div>
  );
}

export default App;
