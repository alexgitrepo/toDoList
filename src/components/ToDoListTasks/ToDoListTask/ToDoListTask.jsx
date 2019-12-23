import React from 'react';

class ToDoListTask extends React.Component {

    onIsDoneChanged =(e)=>{this.props.onIsDoneChangedCallback(e.target.checked,this.props.item )}

    render = () => {
                return (
            <div className="todoList-task">
                <input type="checkbox" checked={this.props.isDone} onChange={this.onIsDoneChanged}/>
                <span>{`${this.props.title}, ${this.props.priority}`}</span>
            </div>
        );
    }
}

export default ToDoListTask;

