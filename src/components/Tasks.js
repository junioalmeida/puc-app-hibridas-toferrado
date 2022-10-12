import React, { Component } from 'react';
import Task from './Task';
import "./Tasks.css";

class Tasks extends Component {

    state = {
        tasks: ["Declara IRPF", "Estudar React", "Revisão do carro"],
        //tasks: []
        newTask: ""
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

    editTask = (oldTask, newTask) => {
        const i = this.state.tasks.indexOf(oldTask);
        const newList = this.state.tasks;
        newList[i] = newTask;
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
        const newTaskList = [...this.state.tasks, this.state.newTask];
        if(this.state.newTask !== ""){
            this.setState({
                tasks: newTaskList,
                newTask: ""
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
                    (t, i) => <Task key={i} description={t} onEdit={this.editTask}/>
                )}
            </ul>
        );
    }
}

export default Tasks;