import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  let t = JSON.parse(localStorage.getItem('tasks'));
  let i = JSON.parse(localStorage.getItem('currentTaskId'));

  if (!t) {
    t = [];
    i = 1;
  }

  const [tasks, setTasks] = useState(t);
  const [taskId, setTaskId] = useState(i);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('currentTaskId', JSON.stringify(taskId));
  });

  const deleteTask = (idTask) => setTasks(tasks.filter(t => t.id !== idTask));

  const editTask = (idTask, newTask) => {
    const i = tasks.findIndex(
      t => t.id === idTask
    );
    const newList = tasks;
    newList[i] = { id: idTask, description: newTask };
    setTasks(newList);
  };

  const addTaskToList = (t) => {
    const newTask = { id: taskId, description: t };
    setTasks([...tasks, newTask]);
    setTaskId(taskId + 1);
  };

  return (
    <div className="App">
      <Header sizePendingTasks={tasks.length} />
      <Tasks tasks={tasks}
        onAdd={addTaskToList}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;

