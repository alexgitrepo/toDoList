import React from 'react';
import style from './ToDoListTask.module.css'

class ToDoListTask extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }
    onIsDoneChanged = (e) => {
        this.props.onIsDoneChangedCallback(e.target.checked, this.props.id)
    }
    onTitleChange=(e)=>{
        this.props.changeStatusCallback(this.props.id, e.target.value)
    }

    render = () => {
        let classIsDone = (this.props.isDone) ? style.todoListTaskDone : style.todoListTask;
        return (
            <div className={classIsDone}>
                <input autoFocus={true} type="checkbox" checked={this.props.isDone} onChange={this.onIsDoneChanged}/>

                {this.state.editMode ? <input value={this.props.title} onBlur={this.deactivateEditMode}
                                              onChange={this.onTitleChange}/>
                    : <span onClick={this.activateEditMode}>{`${this.props.id},${this.props.title}`}</span>}
                ,{this.props.priority}
            </div>
        );
    }
}

export default ToDoListTask;

