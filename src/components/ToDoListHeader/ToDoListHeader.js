import React from 'react';

class ToDoListHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    onTaskChange=(event)=>  {
        let text = event.target.value;
        this.props.onChangeTaskCallback(text)
    }
    onAddTaskClick = () => {
        this.props.onAddTaskClickCallback()
    }



    render()  {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input value={this.props.state} onChange={this.onTaskChange} type="text" placeholder="New task name"/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>

        );
    }
}

export default ToDoListHeader;

