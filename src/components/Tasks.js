import React, { useState } from 'react';
import Task from './Task';
import "./Tasks.css";

const Tasks = (props) => {
    const [newTask, setNewTask] = useState("");

    const image = "/resources/hangloose.png";

    const onAdd = () => {
        if (newTask === "") {
            return;
        }

        props.onAdd(newTask);
        setNewTask("");
    };

    const updateNewTaskField = (event) => setNewTask(event.target.value);

    const enterPressed = (e) => (e.key === "Enter") && onAdd();

    const isListEmpty = () => props.tasks.length === 0;

    return (
        <div className="App">
            <div className='component'>
                <div className='componentHeader'>
                    <h1 className='componentTitle'>My Tasks</h1>
                </div>
                <div className='componentContent'>
                    <div id='blank' className={(isListEmpty() ? "" : "hidden")}>
                        <img src={image} alt="hangloose" />
                        <p>Nothing to do...</p>
                    </div>
                    <div>
                        <ul className={`list ${isListEmpty() ? "hidden" : ""}`}>
                            {props.tasks.map(
                                (t) => <Task
                                    key={t.id}
                                    id={t.id}
                                    description={t.description}
                                    onEdit={props.onEdit}
                                    onDelete={props.onDelete} />
                            )}
                        </ul>
                    </div>
                    <div className='field mt2'>
                        <input type='text'
                            autoComplete='off'
                            onChange={updateNewTaskField}
                            value={newTask}
                            onKeyPress={enterPressed} />
                        <button className='button primary' onClick={onAdd}>
                            <img src='./resources/plus1.png' alt='addTask' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tasks;