import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className='header'>To-do List in Next.js</h1>
      <form onSubmit={inputSubmit} className="form-container">
        <input
          type="text"
          value={task}
          onChange={inputChange}
          placeholder="Enter a task"
          className="input-field"
        />
        <button type="submit" className="submit-button">Add task</button>
      </form>
      <ul className="task-list">
        {tasksArray.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
