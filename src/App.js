import React from 'react';
import './App.css';
import Header from './Components/Header';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h2 className="heading">To-do List</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
