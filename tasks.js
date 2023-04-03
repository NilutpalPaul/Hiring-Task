const tasks = [  {    id: 1,    title: 'Task 1',    description: 'This is task 1',    dueDate: '2023-05-01',  },  {    id: 2,    title: 'Task 2',    description: 'This is task 2',    dueDate: '2023-05-02',  },  {    id: 3,    title: 'Task 3',    description: 'This is task 3',    dueDate: '2023-05-03',  },];

export default function handler(req, res) {
  res.status(200).json(tasks);
}
