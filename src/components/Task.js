import React, { Component } from 'react';

class Task extends Component {

    state = {
        content: this.props.description
    };

    render() {
        return (
            <li>{this.state.content}</li>
        );
    }
}

export default Task;