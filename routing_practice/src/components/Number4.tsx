import React from 'react'

export const Number4:React.FC<any> = (props) => {
    if(isNaN(+props.num)){
        return(
            <div className = "word">
            <h1>The word is: {props.num}</h1>
        </div>
        )
    }
    return(
        <div className = "four">
            <h1>The number is: {props.num}</h1>
            
        </div>
    );
}
