import React, { useState} from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { AddTodoForm } from './components/AddTodoForm';

const initialTodos: Array<Todo> = [
  {text:"Walk the dogs", complete: true}, 
  {text:"Write my ToDo list app", complete: false}
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos  = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && 
      setTodos([...todos, {text:newTodo, complete: false }]);
  }
  const deleteTodo: DeleteTodo = selectedTodo => {
    const updatedTodos = todos.filter(todo => todo.text !==selectedTodo.text)
    console.log(updatedTodos);
    setTodos(updatedTodos)
  }

  return (
    <div className="App">
      <div className="todo-list">
        <h1 className="todo-title">ToDo List</h1>
        <ToDoList todos = {todos} toggleTodo = {toggleTodo} deleteTodo = {deleteTodo} />
        <AddTodoForm addTodo = {addTodo} />
      </div>
    </div>
  );
}

export default App;
