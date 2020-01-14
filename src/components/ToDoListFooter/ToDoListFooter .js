import React from 'react';
import style from './ToDoListFooter.module.css'

class ToDoListFooter extends React.Component {
    state={isHidden:false};
    showShow=()=>{debugger
        this.setState({...this.state, isHidden:true})
    }
    showHide=()=>{
        this.setState({...this.state, isHidden:false})
    }

    onAllFilterClick = () => {this.props.changeFilterCallback("ALL")}
    onCompletedFilterClick = () => {this.props.changeFilterCallback("Completed")}
        onHideFiltersClick = () => {this.props.changeFilterCallback("Active")}


    render = (props) => {

        let classForAll = this.props.filterValue === 'ALL' ? style.filterActive : "";
        let classForCompleted = this.props.filterValue === 'Completed' ? style.filterActive : "";
        let classForActive = this.props.filterValue === 'Active' ? style.filterActive : "";
   return (
            <div className="toDoList-footer">
                {!this.state.isHidden && <div>
                <button onClick={this.onAllFilterClick} className={classForAll}>All</button>
                <button onClick={this.onCompletedFilterClick} className={classForCompleted} >Completed</button>
                <button onClick={this.onHideFiltersClick} className={classForActive}>Active</button>
                </div>}
                    {!this.state.isHidden && <span onClick={this.showShow}>hide</span>}
                {this.state.isHidden && <span onClick={this.showHide}>show</span>}
            </div>

        );
    }
}

export default ToDoListFooter;

