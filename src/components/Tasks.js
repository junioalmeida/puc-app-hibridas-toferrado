import React, { Component } from 'react';
import Task from './Task';
import "./Tasks.css";

class Tasks extends Component {

    state = {
        tasks: [
            {id: 1, description: "Declara IRPF" },
            {id: 2, description: "Estudar React"},
            {id: 3, description: "Revisão do carro"}
        ],
        //tasks: []
        newTask: "",
        taskId: 4
    };

    image = "/resources/hangloose.png";

    render() {
        return (
            <div className="App">
                <div className='component'>
                    <div className='componentHeader'>
                        <h1 className='componentTitle'>My Tasks</h1>
                    </div>
                    <div className='componentContent'>
                        <div id='blank' className={(this.isListEmpty() ? "" : "hidden")}>
                            <img src={this.image} alt="hangloose" />
                            <p>Nothing to do...</p>
                        </div>
                        <div>{this.listTasks()}</div>
                        <div className='field mt2'>
                            <input type='text' 
                                autoComplete='off'
                                onChange={this.updateNewTaskField}
                                value={this.state.newTask}
                                onKeyPress={this.enterPressed} />
                            <button className='button primary' onClick={this.addTaskToList}>
                                <img src='./resources/plus1.png' alt='addTask' />
                            </button>
                        </div>
                    </div>
                </div>
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
        newList[i] = {id: idTask, description: newTask};
        this.setState({
            tasks: newList
        });
    };

    enterPressed = (e) => {
        if(e.key === "Enter") this.addTaskToList();
    };

    updateNewTaskField = (event) => {
        this.setState({
            newTask: event.target.value
        });
    };

    addTaskToList = () => {
        const newTask = {id: this.state.taskId, description: this.state.newTask};
        const newTaskList = [...this.state.tasks, newTask];
        const newTaskId = this.state.taskId + 1;
        if(this.state.newTask !== ""){
            this.setState({
                tasks: newTaskList,
                newTask: "",
                taskId: newTaskId
            });
        }
    };

    isListEmpty() {
        return this.state.tasks.length === 0;
    }

    listTasks() {
        if (this.isListEmpty()) {
            return "";
        }
        return (
            <ul className={`list ${this.isListEmpty() ? "hidden" : ""}`}>
                {this.state.tasks.map(
                    (t) => <Task 
                    key={t.id}
                    id={t.id}
                    description={t.description}
                    onEdit={this.editTask}
                    onDelete={this.deleteTask}/>
                )}
            </ul>
        );
    }
}

export default Tasks;