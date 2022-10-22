import React, { Component } from 'react';

class Task extends Component {

    state = {
        id: this.props.id,
        content: this.props.description,
        edit: false
    };

    style = {
        height: "2.7rem"
    };

    iEdit = "./resources/edit.png";
    iDelete = "./resources/delete.png";

    render() {
        if (this.state.edit) {
            return (
                <li style={this.style}>
                    <input
                        value={this.state.content}
                        onChange={this.changeTask}
                        onBlur={this.confirmEdit}
                        onKeyPress={this.enterPressed}
                        autoFocus
                    />
                </li>
            );
        } else {
            return (
                <li style={this.style}>
                    <span>{this.state.content}</span>
                    <span className='buttonGroup end'>
                        <button className='button primary' onClick={this.edit}>
                            <img src={this.iEdit} alt="editTask" />
                        </button>
                        <button className='button danger' onClick={this.deleteTask}>
                            <img src={this.iDelete} alt="deleteTask" />
                        </button>
                    </span>
                </li>
            );
        }
    }

    deleteTask = () => {
        this.props.onDelete(this.props.id);
    };

    changeTask = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    confirmEdit = () => {
        this.setState({
            edit: false
        });
        this.props.onEdit(this.props.id, this.state.content);
    };

    edit = () => {
        this.setState({
            edit: true
        });
    };

    enterPressed = (e) => {
        if (e.key === "Enter") this.confirmEdit();
    }
}

export default Task;