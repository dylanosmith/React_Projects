import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props){
        super(props);
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
        const {firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h6>Age:{this.state.ageCount}</h6>
                <h6>Hair Color: {hairColor}</h6>
                <button onClick = {this.handleClick}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}
export default PersonCard;