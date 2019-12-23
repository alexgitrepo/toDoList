import React from 'react';
import style from './ToDoListFooter.module.css'

class ToDoListFooter extends React.Component {
    render = (props) => {
        let classForAll = this.props.filterValue === 'ALL' ? style.filterActive : "";
        let classForCompleted = this.props.filterValue === 'Completed' ? style.filterActive : "";
        let classForActive = this.props.filterValue === 'Active' ? style.filterActive : "";
   return (
            <div className="toDoList-footer">
                <button onClick={()=>{this.props.changeFilterCallback("ALL")}} className={classForAll}>All</button>
                <button onClick={()=>{this.props.changeFilterCallback("Completed")}} className={classForCompleted} >Completed</button>
                <button onClick={()=>{this.props.changeFilterCallback("Active")}} className={classForActive}>Active</button>
            </div>

        );
    }
}

export default ToDoListFooter;

