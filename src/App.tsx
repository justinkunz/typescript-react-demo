import React from 'react';
import { TodoContainer, NewTodoForm } from './Components';
import { AppBanner } from './Components/Styled';
import { useSelector } from 'react-redux';
import { AppState } from './types';

import './App.css';

function App() {
  const state: AppState = useSelector((state: AppState) => state);

  const completedTasks = state.todos.filter((todo) => !!todo.isCompleted);
  const incompleteTasks = state.todos.filter((todo) => !todo.isCompleted);

  return (
    <div className='App'>
      <AppBanner>React/Redux/Typescript Todo App</AppBanner>
      <TodoContainer completedTasks={completedTasks} incompleteTasks={incompleteTasks} />
      <NewTodoForm todoCount={incompleteTasks.length} />
    </div>
  );
}

export default App;
