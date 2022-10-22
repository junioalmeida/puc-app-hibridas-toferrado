import React, { useState, useEffect } from 'react';

const Task = (props) => {

    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(props.id);
    const [content, setContent] = useState(props.description);
    const [edit, setEdit] = useState(false);

    const iEdit = "./resources/edit.png";
    const iDelete = "./resources/delete.png";
    const style = {
        height: "2.7rem"
    };

    useEffect(() => {
        setContent(props.description);
    }, [props.description]);

    const deleteTask = () => props.onDelete(props.id);
    
    const changeTask = (e) => setContent(e.target.value);
    
    const confirmEdit = () => {
        setEdit(false);
        setId(props.id);
        props.onEdit(props.id, content);
    };
    
    const editTask = () => setEdit(true);
    
    const enterPressed = (e) => (e.key === "Enter") && confirmEdit();

    return edit ? (
        <li style={style}>
            <input
                value={content}
                onChange={changeTask}
                onBlur={confirmEdit}
                onKeyPress={enterPressed}
                autoFocus
            />
        </li>
    ) : (
        <li style={style}>
            <span>{content}</span>
            <span className='buttonGroup end'>
                <button className='button primary' onClick={editTask}>
                    <img src={iEdit} alt="editTask" />
                </button>
                <button className='button danger' onClick={deleteTask}>
                    <img src={iDelete} alt="deleteTask" />
                </button>
            </span>
        </li>
    );
}

export default Task;