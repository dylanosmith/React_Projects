import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return(
            <form action="#" method="post">
                <div>
                    <label htmlFor="firstName">FirstName:</label>
                    <input type="text" name="firstName" id="fname"/>
                </div>
                <div>
                    <label htmlFor="lastName">LastName:</label>
                    <input type="text" name="LastName" id="lname"/>
                </div>
                <div>
                    <label htmlFor="birthday">Birthday:</label>
                    <input type="date" name="name" id="birthday"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default LoginForm;