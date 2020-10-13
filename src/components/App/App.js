import React, {Component} from "react";
import './App.scss';
import AppHeader from "../AppHeader/AppHeader";
import SearchPenal from "../SearchPenal/SearchPenal";
import TodoList from "../TodoList/TodoList";

class App extends Component {
    state = {
        todoData: [
            {label: 'Drink coffee', important: false, id: 1},
            {label: 'Make awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id);
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArray = [...before, ...after];

            return {
                todoData: newArray
            }

        })
    }

    render() {
        return (
            <div className='container'>
                <AppHeader toDo={1} done={3}/>
                <SearchPenal/>
                <TodoList
                    onDeleted={this.deleteItem}
                    todos={this.state.todoData}
                />
            </div>
        )
    }
}

export default App;
