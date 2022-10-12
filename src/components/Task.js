import React, { Component } from 'react';

class Task extends Component {

    state = {
        content: "Task"
    };

    render() {
        return (
            <li>{this.state.content}</li>
        );
    }
}

export default Task;