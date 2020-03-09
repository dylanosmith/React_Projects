import React from 'react'
interface WrapperProps{
    name: string;
    setName: (name:string) => void;
}
const Wrapper:React.FC<WrapperProps> = ({name, setName}) => {

    return (
        <div className="main">
            
        </div>
    )
}

export default Wrapper
