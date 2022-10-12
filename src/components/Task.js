import React, { Component } from 'react';

class Task extends Component {

    state = {
        content: this.props.description,
        edit: false
    };

    style = {
        height: "2.7rem"
    };
    iEdit = "./resources/edit.png";

    render() {
        if(this.state.edit) {
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
                    </span>
                </li>
            );
        }
    }

    changeTask = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    confirmEdit = () => {
        this.setState({
            edit: false
        });
        this.props.onEdit(this.props.description, this.state.description);
    };

    edit = () => {
        this.setState({
            edit: true
        });
    };

    enterPressed = (e) => {
        if(e.key === "Enter") this.confirmEdit();
    }
}

export default Task;