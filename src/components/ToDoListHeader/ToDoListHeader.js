import React from 'react';
import style from'./ToDoListHeader.module.css'
class ToDoListHeader extends React.Component {
 state={error:false}
    onTaskChange=(event)=>  {debugger
        let text = event.target.value;
this.setState({...this.state,error:false})
        this.props.onChangeTaskCallback(text)
    }
    onAddTaskClick = () => {
        if (this.props.state ===''){
            this.setState({...this.state,error:true})
        }
        else {
            this.setState({...this.state,error:false})
            this.props.onAddTaskClickCallback()
        }

    }

    render()  {
        let classError=(this.state.error)? style.error:''
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onKeyPress={(e)=>{e.key==='Enter'&& this.onAddTaskClick()}} className={classError}
                           value={this.props.state} onChange={this.onTaskChange} type="text" placeholder="New task name"/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>

        );
    }
}

export default ToDoListHeader;

