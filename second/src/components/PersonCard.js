import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props){
        super(props);
        const {firstName, lastName, age, hairColor } = this.props;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hairColor = hairColor;
        this.state = {
            ageCount: this.age
        }
    }
    handleClick = () => {
        this.setState({
            ageCount: this.state.ageCount + 1
        })
    }
    render() {
        return(
            <div>
                <h1>{this.lastName}, {this.firstName}</h1>
                <h6>Age:{this.state.ageCount}</h6>
                <h6>Hair Color: {this.hairColor}</h6>
                <button onClick = {this.handleClick}>Birthday Button for {this.firstName} {this.lastName}</button>
            </div>
        );
    }
}
export default PersonCard;