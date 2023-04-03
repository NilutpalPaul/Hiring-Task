import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    }
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Hiring Task Application</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <button>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
