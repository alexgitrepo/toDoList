import React from 'react';
import './App.css';
import ToDoListHeader from "./components/ToDoListHeader/ToDoListHeader";
import ToDoListTasks from "./components/ToDoListTasks/ToDoListTasks";
import ToDoListFooter from "./components/ToDoListFooter/ToDoListFooter ";


class App extends React.Component {
       state = {
        tasks: [{title: "JS", isDone: true, priority: 'priority: VeryHigh'},
            {title: "HTML", isDone: true, priority: 'priority: high'},
            {title: "CSS", isDone: true, priority: 'priority: high'},
            {title: "React", isDone: false, priority: 'priority: VeryHigh'}],
        filterValue: "ALL",
        newTask : ""
    }
   ;
    changeFilterCallback = (newFilterValue)=> {
        this.setState({filterValue:newFilterValue})
}

    onChangeTaskCallback = (text) => {
        this.setState({newTask:text})

    }

    onAddTaskClickCallback = () => {
        let newTask = {title: this.state.newTask, isDone: false, priority: 'priority: Low'};
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        })
        this.setState({newTask:''});
    }

    onIsDoneChangedCallback=(newValue, currentTask)=>{
        let newTasks = this.state.tasks.map((item)=> { if (item===currentTask){ return {...item,isDone:newValue}}
            else {return item}
         })
        this.setState({tasks:newTasks})
            }



    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader state={this.state.newTask} onAddTaskClickCallback={this.onAddTaskClickCallback} onChangeTaskCallback={this.onChangeTaskCallback} />
                    <ToDoListTasks
                    tasks={this.state.tasks.filter(t=>{if (this.state.filterValue === 'ALL'){
                        return true
                    }
                     else if(this.state.filterValue === 'Completed' && t.isDone===true){return true }
                     else if(this.state.filterValue === 'Active' && t.isDone===false){return true }
                    })} onIsDoneChangedCallback={this.onIsDoneChangedCallback}
                    />
                    <ToDoListFooter changeFilterCallback={this.changeFilterCallback} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

window.myshow = App
export default App;

