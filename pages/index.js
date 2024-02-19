// import { useState } from 'react';

// export default function Home() {
//   const [task, setTask] = useState('');
//   const [tasksArray, setTasksArray] = useState([]);

//   const inputChange = (e) => {
//     setTask(e.target.value);
//   };

//   const inputSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim()) {
//       setTasksArray([...tasksArray, { name: task, isCompleted: false }]);
//       setTask('');
//     }
//   };

//   const handleDelete = (index) => {
//     setTasksArray(tasksArray.filter((_, i) => i !== index));
//   };

//   const toggleStrikeThrough = (index) => {
//     const updatedTasks = [...tasksArray];
//     updatedTasks[index] = { ...updatedTasks[index], isCompleted: !updatedTasks[index].isCompleted };
//     setTasksArray(updatedTasks);
//   };

//   return (
//     <div className='gradient-background'>
//     <div className='task-headers'>
//       <h1 className='header'>What are you going to do today?</h1>
//       <form onSubmit={inputSubmit} className="form-container">
//         <input
//           type="text"
//           value={task}
//           onChange={inputChange}
//           placeholder="Enter a task"
//           className="input-field"
//         />
//         <button type="submit" className="submit-button">Add task</button>
//       </form>
//       <ul className="task-list">
//         {tasksArray.map((task, index) => (
//           <li key={index} className="task-item">
//             <span className={task.isCompleted ? 'completed' : ''}>{task.name}</span>
//             <div className="buttons-container">
//               <button className='done-button' onClick={() => toggleStrikeThrough(index)}>Done</button>
//               <button className='delete-button' onClick={() => handleDelete(index)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasksArray([...tasksArray, { name: task, isCompleted: false, time: getTime() }]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  const toggleStrikeThrough = (index) => {
    const updatedTasks = [...tasksArray];
    updatedTasks[index] = { ...updatedTasks[index], isCompleted: !updatedTasks[index].isCompleted };
    setTasksArray(updatedTasks);
  };

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amOrPm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}${amOrPm}`;
  };

  return (
    <div className='gradient-background'>
      <div className='task-headers'>
        <h1 className='header'>What are you going to do today?</h1>
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
              <div className="task-container">
                <span className={task.isCompleted ? 'completed' : ''}>{task.name}</span>
                <div className="buttons-container">
                  <button className='done-button' onClick={() => toggleStrikeThrough(index)}><FontAwesomeIcon icon={faCheck} /></button>
                  <button className='delete-button' onClick={() => handleDelete(index)}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
              </div>
              <div className="time-container">
                <span className="task-time">{task.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
