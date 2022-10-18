import React, { Component } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

class App extends Component {

  state = {
    tasks: [
      { id: 1, description: "Declara IRPF" },
      { id: 2, description: "Estudar React" },
      { id: 3, description: "Revisão do carro" }
    ],
    taskId: 4
  };

  render() {
    return (
      <div className="App">
        <Header sizePendingTasks={this.state.tasks.length}/>
        <Tasks tasks={this.state.tasks} 
          onAdd={this.addTaskToList}
          onDelete={this.deleteTask}
          onEdit={this.editTask}
        />
      </div>
    );
  }

  deleteTask = (idTask) => {
    const newList = this.state.tasks.filter(
      t => t.id !== idTask
    );
    this.setState({
      tasks: newList
    });
  };

  editTask = (idTask, newTask) => {
    const i = this.state.tasks.findIndex(
      t => t.id === idTask
    );
    const newList = this.state.tasks;
    newList[i] = { id: idTask, description: newTask };
    this.setState({
      tasks: newList
    });
  };

  addTaskToList = (t) => {
    const newTask = { id: this.state.taskId, description: t };
    const newTaskList = [...this.state.tasks, newTask];
    const newTaskId = this.state.taskId + 1;
    if (this.state.newTask !== "") {
      this.setState({
        tasks: newTaskList,
        taskId: newTaskId
      });
    }
  };
}

export default App;

