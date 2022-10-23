import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import NavBar from './components/NavBar';
import About from './components/About';

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
      <Router>
        <Header sizePendingTasks={tasks.length} />
        <NavBar />

        <Routes>
          <Route path='/' element={
            <Tasks tasks={tasks}
              onAdd={addTaskToList}
              onDelete={deleteTask}
              onEdit={editTask}
            />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

