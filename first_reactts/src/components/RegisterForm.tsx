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
        confirmPass: props.confirmPass,
        submitted: false,
    });

    const [errors, setErrors] =useState<{firstName:string|null; lastName:string|null; email:string|null; password:string|null; confirmPass:string|null}>({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPass: null
    });

    const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        });
    }
    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const NewErrors = {...errors};
        if(form.firstName.length < 2){
            NewErrors.firstName = "First name must be longer than 2 characters";
        }
        if(form.lastName.length < 2){
            NewErrors.lastName = "Last name must be longer than 2 characters";
        }
        if(form.email.length < 5){
            NewErrors.email = "Email must be longer than 5 characters";
        }
        if(form.password.length < 8){
            NewErrors.password = "Password must be longer than 8 characters"
        }
        if(form.confirmPass !== form.password){
            NewErrors.confirmPass = "Passwords must match"
        }
        setErrors({
            ...errors,
            firstName: NewErrors.firstName,
            lastName: NewErrors.lastName,
            email: NewErrors.email,
            password: NewErrors.password,
            confirmPass: NewErrors.confirmPass
        });
        console.log(form);
        setForm({
            ...form,
            submitted: true
        });

    }
    return(
        <div>
            {form.submitted ? <h1>You have submitted the form!</h1> : <h1>Please submit the form</h1> }
            <form onSubmit = {onSubmitHandler}>
                <div>
                    <label htmlFor="">First Name:</label>
                    <input type="text" id="firstName" onChange = {onChangeHandler}/>
                </div>
                <span className ="validations">{errors.firstName && errors.firstName}</span>
                <div>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" id="lastName" onChange = {onChangeHandler}/>
                </div>
                <span className ="validations">{errors.lastName && errors.lastName}</span>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="text" id="email" onChange = {onChangeHandler}/>
                </div>
                <span className ="validations">{errors.email && errors.email}</span>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" id="password" onChange = {onChangeHandler}/>
                </div>
                <span className ="validations">{errors.password && errors.password}</span>
                <div>
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" id="confirmPass" onChange = {onChangeHandler}/>
                </div>
                <span className ="validations">{errors.confirmPass && errors.confirmPass}</span>
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