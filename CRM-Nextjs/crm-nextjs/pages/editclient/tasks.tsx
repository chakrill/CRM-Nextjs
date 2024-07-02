import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CommandBar from '../components/CommandBar';

const initialTasks = [
  { id: 1, title: 'Follow up with John', completed: false },
  { id: 2, title: 'Send proposal to Jane', completed: true },
];

const TasksPage = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <CommandBar />
        <h1 className="text-2xl mb-4">Tasks</h1>
        <div className="mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New task"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button onClick={addTask} className="mt-2 p-2 bg-blue-500 text-white rounded">Add Task</button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="flex justify-between items-center p-2 border-b border-gray-200">
              <span className={`${task.completed ? 'line-through' : ''}`}>{task.title}</span>
              <div>
                <button onClick={() => toggleTask(task.id)} className="mr-2 p-1 bg-green-500 text-white rounded">
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(task.id)} className="p-1 bg-red-500 text-white rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;
