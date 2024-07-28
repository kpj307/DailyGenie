import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container mt-5">
      <header className="align-items-center">
        <h1 className='fw-bold my-5 text-center'>DailyGenie</h1>
      </header>
      <TaskInput />
      <h2 className="my-3 fw-bold">Tasks</h2>
      <TaskList />
    </div>
  );
}

export default App;
