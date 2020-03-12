import React from 'react'
import { RouteComponentProps } from '@reach/router'

interface ColorProps {
    bg:string;
    color:string;
    word: string;


}
export const Color:React.FC<RouteComponentProps<ColorProps>> = ({color, bg, word}) => {
    return (
        <div className = "blue-red">
            <h1 style = {{
                backgroundColor:bg,
                color:color,
            }}> The Word is: {word}</h1>
            
        </div>
    )
}
