import React from 'react';

interface BoxProps {
    color: string;
    width: number;
    height: number;
}
const Box : React.FC<BoxProps> = props => {
    return (
        <div style = {{
            backgroundColor: props.color,
            width: props.width,
            height: props.height,
            marginRight: 10,
            borderRadius: 7
        }}>
        </div>
    )
}
export default Box;