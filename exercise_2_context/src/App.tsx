import React, { useContext } from 'react';
import './App.css';
import ButtonList from './container/ButtonList';
import FormAdd from './container/FormAdd';
import FormList from './container/FormList';
import Context from './store/Context';

function App() {
  const store: any = useContext(Context);
  const { data } = store[0];
  const dispatch = store[1];

  return (
    <div className='App'>
      <FormAdd dispatch={dispatch} />
      <ButtonList />
      <FormList dataInStore={data} dispatch={dispatch} />
    </div>
  );
}

export default App;
