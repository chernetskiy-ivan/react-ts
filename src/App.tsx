import React from 'react';
import {Navbar} from './components/Navbar'
import {TodoForm} from './components/TodoForm'


const App: React.FC = () => {

  const addHandler = (title: string) => {
    console.log('add New Todo', title)
  }

  return <>
    <Navbar/> 
    <div className="container">
      <TodoForm onAdd={addHandler} />
    </div>
  </>;
}

export default App;
