# Hiring Task

Set up a new Next.js project using the command: npx create-next-app.

Install the following dependencies:

npm install react react-dom next
npm install axios


Create a new directory called pages in the root directory.

Create a new file called index.js inside the pages directory:

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


Create a new directory called api in the root directory.

Create a new file called tasks.js inside the api directory:

const tasks = [  {    id: 1,    title: 'Task 1',    description: 'This is task 1',    dueDate: '2023-05-01',  },  {    id: 2,    title: 'Task 2',    description: 'This is task 2',    dueDate: '2023-05-02',  },  {    id: 3,    title: 'Task 3',    description: 'This is task 3',    dueDate: '2023-05-03',  },];

export default function handler(req, res) {
  res.status(200).json(tasks);
}


Update the package.json file with the following scripts:

"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}


Run the application using the command: npm run dev.

Open a web browser and go to http://localhost:3000 to see the Hiring Task Application in action.
