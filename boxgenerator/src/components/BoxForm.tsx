import React, { useState } from 'react';

interface formProps {
    colors: string[];
    setColors: Function;
}

const BoxForm:React.FC<formProps> = ({colors, setColors}) => {
    const [newColor, setNewColor] = useState<string>("")
    const handleClick = () => {
        if(newColor.length){
            setColors([...colors,newColor]);
            setNewColor("");
        }
    }

    return(
        <div>
            <form>
                <label className="form-label">Color:</label>
                <input id="color" type="text" value={newColor} onChange={e => setNewColor(e.target.value)}/>
                <label className="form-label" >Height:</label>
                <input id="height" type="text"/>
                <label className="form-label" htmlFor="">Width:</label>
                <input id="width" type="text"/>
        
                <button onClick={handleClick} type="submit">Create Box</button>
            </form>
    
        </div>

    )

}
export default BoxForm;


