import React, { Component } from 'react';
import Task from './Task';
import "./Tasks.css";

class Tasks extends Component {

    state = {
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
                            <button className='button primary' onClick={this.onAdd}>
                                <img src='./resources/plus1.png' alt='addTask' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    onAdd = () => {
        if(this.state.newTask === "") {
            return;
        }

        this.props.onAdd(this.state.newTask);

        this.setState({
            newTask: ""
        });
    };

    updateNewTaskField = (event) => {
        this.setState({
            newTask: event.target.value
        });
    };

    enterPressed = (e) => {
        if (e.key === "Enter") this.onAdd();
    };

    isListEmpty() {
        return this.props.tasks.length === 0;
    }

    listTasks() {
        if (this.isListEmpty()) {
            return "";
        }
        return (
            <ul className={`list ${this.isListEmpty() ? "hidden" : ""}`}>
                {this.props.tasks.map(
                    (t) => <Task
                        key={t.id}
                        id={t.id}
                        description={t.description}
                        onEdit={this.props.onEdit}
                        onDelete={this.props.onDelete} />
                )}
            </ul>
        );
    }
}

export default Tasks;