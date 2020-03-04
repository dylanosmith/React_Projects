import React from 'react';
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    hairColor: string;
}

const PersonCard: React.FC <Person> = props => {
    return (
        <div className="personCard">
            <h1 className="lead">{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    );
}
export default PersonCard;