import React, { useState } from "react";

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    hairColor: string;
}

const PersonCard: React.FC <Person> = props => {
    const [state, setState] = useState({
        ageCount: props.age
    });
    const clickHandler = () => {
        console.log(state);
        setState({
            ageCount: state.ageCount + 1
        });
    };
    return (
        <div className="personCard">
            <h1 className="lead">{props.lastName}, {props.firstName}</h1>
            <p>Age: {state.ageCount}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick = {clickHandler}>Happy Birthday {props.firstName} {props.lastName}</button>
        </div>
    );
}
export default PersonCard;