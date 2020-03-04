import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h6>Age:{age}</h6>
                <h6>Hair Color: {hairColor}</h6>
            </div>
        );
    }
}
export default PersonCard;