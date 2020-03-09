import React, { useState, ChangeEvent, FormEvent } from 'react';
interface AddTodFormProps {
    addTodo: AddTodo
}
export const AddTodoForm:React.FC<AddTodFormProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }
    return(
        <form className="form">
            <input className="form-input" type="text" value = {newTodo} onChange = {handleChange}/>
            <button className="add" type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>

    )

};