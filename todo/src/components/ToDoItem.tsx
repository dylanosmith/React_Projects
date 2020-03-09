import React from 'react'
import './ToDoItem.css';

interface ToDoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

export const ToDoItem: React.FC<ToDoListItemProps> = ({ todo, toggleTodo, deleteTodo }) => {

    return (
    <li>
        <label className = {todo.complete ? "complete": undefined}>
            <input type="checkbox" checked = {todo.complete} onChange = {() => toggleTodo(todo)}/> 
            {todo.text}
        </label>
        <button className="delete" onClick ={() => deleteTodo(todo)}>Delete</button>
    </li>
    )
}