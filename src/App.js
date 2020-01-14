import React from 'react';
import './App.css';
import ToDoListHeader from "./components/ToDoListHeader/ToDoListHeader";
import ToDoListTasks from "./components/ToDoListTasks/ToDoListTasks";
import ToDoListFooter from "./components/ToDoListFooter/ToDoListFooter ";


class App extends React.Component {
    componentDidMount() {
        this.restoreState()
    }

    ;
    state = {
        tasks: [],
        filterValue: "ALL",
        newTask: "",
    nextTaskId : 0
    }
    ;
    saveState=()=>{
        let stateAsString=JSON.stringify(this.state)
        localStorage.setItem('our-state',stateAsString)
    }
    restoreState=()=>{
        let state ={
            tasks:[],
            nextTaskId : 0,
            filterValue: 'ALL'
        }

        let stateAsString=localStorage.getItem('our-state')
        if (stateAsString!=null){
            state=JSON.parse(stateAsString)
        }
        this.setState(state)
    }

    changeFilterCallback = (newFilterValue) => {
        this.setState({filterValue: newFilterValue})
    }

    onChangeTaskCallback = (text) => {
        this.setState({newTask: text})

    }
    onAddTaskClickCallback = () => {
        this.state.nextTaskId++
        let newTask = {id: this.state.nextTaskId, title: this.state.newTask, isDone: false, priority: 'priority: Low'};
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        })
        this.setState({newTask: ''},this.saveState);

    }

    changeTask=(taskId,obj)=>{
        let newTasks = this.state.tasks.map((item) => {
            if (item.id === taskId) {
                return {...item, ...obj}
            } else {
                return item
            }
        })
        this.setState({tasks: newTasks})
    }

    onIsDoneChangedCallback = (newValue, currentTask) => {
        this.changeTask(currentTask,{isDone:newValue})
        // let newTasks = this.state.tasks.map((item) => {
        //     if (item.id === currentTask) {
        //         return {...item, isDone: newValue}
        //     } else {
        //         return item
        //     }
        // })
        // this.setState({tasks: newTasks})
    }

    changeStatusCallback =(currentTask,newValue)=>{
        this.changeTask(currentTask,{title:newValue})
        // let newTasks = this.state.tasks.map((item) => {
        //     if (item.id === currentTask) {
        //         return {...item, title: newValue}
        //     } else {
        //         return item
        //     }
        // })
        // this.setState({tasks: newTasks})
    }


    render = () => {
        let newTasks = this.state.tasks.filter(t => {
            if (this.state.filterValue === 'ALL') {
                return true
            } else if (this.state.filterValue === 'Completed' && t.isDone === true) {
                return true
            } else if (this.state.filterValue === 'Active' && t.isDone === false) {
                return true
            }
        })
        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader state={this.state.newTask} onAddTaskClickCallback={this.onAddTaskClickCallback}
                                    onChangeTaskCallback={this.onChangeTaskCallback}/>
                    <ToDoListTasks changeStatusCallback={this.changeStatusCallback}
                        tasks={newTasks} onIsDoneChangedCallback={this.onIsDoneChangedCallback}
                    />
                    <ToDoListFooter changeFilterCallback={this.changeFilterCallback}
                                    filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

window.myshow = App
export default App;

