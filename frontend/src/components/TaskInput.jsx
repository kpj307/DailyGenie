import React, { useState } from 'react';
import axios from 'axios';

const TaskInput = () => {
  const [task, setTask] = useState({ title: '', description: '' });
  const [analysis, setAnalysis] = useState(null);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const analyzeTask = async () => {
    const response = await axios.post('http://localhost:8000/api/tasks/', task);
    setAnalysis(response.data);
  
  };

  return (
    <div className='align-items-end'>
      <div className="form-outline w-25">
        <input 
        className='form-control'
          type="text" 
          name="title" 
          value={task.title} 
          onChange={handleChange} 
          placeholder="Enter task title"
        />
      </div>
      <div className="form-outline w-50 my-2">
        <textarea className='form-control'
          name="description" 
          value={task.description} 
          onChange={handleChange} 
          placeholder="Enter task description"
        ></textarea>
      </div>
       
      <button onClick={analyzeTask} className='btn btn-primary'>Add Task</button>
      {analysis && <div>Task Added: {JSON.stringify(analysis)}</div>}
    </div>
  );
};

export default TaskInput;
