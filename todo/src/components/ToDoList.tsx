import React from 'react';
import { ToDoItem } from './ToDoItem';

interface ToDoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

export const ToDoList: React.FC<ToDoListProps>= ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <ul className = "listStyle">
            {todos.map(todo => {
                return (
                <ToDoItem key={todo.text} todo = {todo} toggleTodo = {toggleTodo} deleteTodo = {deleteTodo} />
                )
            })}
        </ul>
    )
};