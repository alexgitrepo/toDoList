import React from 'react';
import ToDoListTask from "./ToDoListTask/ToDoListTask";

class ToDoListTasks extends React.Component {
       render = () => {

        let tasksElements = this.props.tasks.map(item=> <ToDoListTask
            title={item.title} isDone={item.isDone} onIsDoneChangedCallback={this.props.onIsDoneChangedCallback}
        priority={item.priority} item={item}/>)

        return (
            <div className="todoList-tasks">
               {tasksElements}
            </div>

        );
    }
}

export default ToDoListTasks;

