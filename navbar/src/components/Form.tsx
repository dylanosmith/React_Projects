import React from 'react';
import { NavContext } from './NavContext';

const Form = () => {
    const [user,setUser] = React.useContext(NavContext);
    const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>)=> {
        setUser({
            ...user,
            name:event.target.value
        })
    }
    return (
        <div>
            <label>Your Name:</label>
            <input type="text" value={user.name} onChange = {onChangeHandler}/>
        </div>
    );
}

export default Form;
