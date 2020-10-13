import React from "react";
import './TodoList.scss';
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = ({todos, onDeleted}) => {
    const elements = todos.map((element) => {
        const {id, ...elementProps} = element;
        return (
            <li
                className='list-group-item'
                key={id}
            >
                <TodoListItem onDeleted={() => onDeleted(id)} {...elementProps}
                /></li>
        )
    })
    return (

        <ul className='TodoList list-group'>
            {elements}
        </ul>
    )
}

export default TodoList;
