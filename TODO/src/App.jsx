import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <body className='bg-[url("https://media.istockphoto.com/id/1011182136/photo/check-off-completed-tasks-on-a-to-do-list.jpg?s=612x612&w=0&k=20&c=1iYcULZh7JYHaJDldIfG8h3CxWwaDnZnvltkYon66h4=")] bg-cover h-screen'> 
       <div className="container mt-5 ml-5">
       <h1 className='text-6xl text-blue-600 text-center'>Todo List</h1>
       <div className="mt-3 text-center">
        <input type="text" className="border px-3 py-2" placeholder="Add a new task" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
        <button className="bg-blue-300 border border-white rounded px-3 py-2 ml-3" onClick={addTask}>
          Add
        </button>
      </div>
      <div className='border border-white ml-[17rem] mr-[17rem] mt-5'>
      <ul className="content-between text-center mt-5">
        {tasks.map((task) => (
          <li key={task.id} className={`list-group-item ${task.completed ? 'completed' : ''}`}>

          <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)}/>

            <span className="ml-2">{task.text}</span>

            <button className="border bg-black text-white rounded px-3 py-2 ml-5 text-center " onClick={() => deleteTask(task.id)}>
              Delete
            </button>
            
          </li>
        ))}
      </ul>
      </div>
    </div>
      </body>
      )
}

export default App
