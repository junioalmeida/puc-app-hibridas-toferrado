import React, { Component } from 'react';
import "./Tasks.css";

class Tasks extends Component {

    state = {
        tasks: ["Declara IRPF", "Estudar React", "Revisão do carro"]
        //tasks: []
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
                            <input id='newTaskFieldContent' type='text' autoComplete='off'/>
                            <button className='button primary' onClick={this.addTaskToList}>
                                <img src='./resources/plus1.png' alt='addTask' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addTaskToList = () => {
        let field = document.getElementById('newTaskFieldContent');
        const newTaskList = [...this.state.tasks, field.value];
        if(field.value !== ""){
            this.setState({
                tasks: newTaskList
            });
        }

        field.value = "";
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
                    (t, i) => <li key={i}>{t}</li>
                )}
            </ul>
        );
    }
}

export default Tasks;