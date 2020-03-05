import React, { useState } from 'react';

interface Form{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPass: string;
}
const RegisterForm : React.FC<Form> = (props) => {
    const [form, setForm] = useState({
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        password: props.password,
        confirmPass: props.confirmPass
    })

    const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        });
    }
    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        console.log(form)
    }

    return(
        <div>
            <form onSubmit = {onSubmitHandler}>
                <label htmlFor="">First Name:</label>
                <input type="text" id="firstName" onChange = {onChangeHandler}/>
                <br/>
                <label htmlFor="">Last Name:</label>
                <input type="text" id="lastName" onChange = {onChangeHandler}/>
                <br/>
                <label htmlFor="">Email:</label>
                <input type="text" id="email" onChange = {onChangeHandler}/>
                <br/>
                <label htmlFor="">Password:</label>
                <input type="password" id="password" onChange = {onChangeHandler}/>
                <br/>
                <label htmlFor="">Confirm Password:</label>
                <input type="password" id="confirmPass" onChange = {onChangeHandler}/>
                <br/>
                <button type="submit">Register</button>

            </form>
            <div>
                <h3>First Name: <span>{form.firstName}</span></h3>
                <h3>last Name: <span>{form.lastName}</span></h3>
                <h3>Email: <span>{ form.email }</span></h3>
                <h3>Password: <span> {form.password} </span></h3>
                <h3>Confirm Password: <span>{form.confirmPass}</span></h3>
            </div>
        </div>
    )

}

export default RegisterForm;