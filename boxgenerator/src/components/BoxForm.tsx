import React, { useState } from 'react';
import { Colors } from '../App';

interface FormProps {
    colors: Colors[];
    setColors: Function;
}

const BoxForm:React.FC<FormProps> = ({colors, setColors}) => {
    const [newColor, setNewColor] = useState<Colors>({
        color:"",
        height: 0,
        width: 0
    })
    const handleClick = () => {
        if(newColor){
            setColors([...colors,newColor]);
            setNewColor({
                color:"",
                height:0,
                width: 0
            });
        }
    }

    return(
        <div>
                <label className="form-label">Color:</label>
                <input id="color" type="text" value={newColor.color} onChange={e => setNewColor({...newColor,color:e.target.value})}/>
                <label className="form-label" >Height:</label>
                <input id="height" type="number" value={newColor.height}  onChange={e => setNewColor({...newColor, height:+e.target.value})}/>
                <label className="form-label">Width:</label>
                <input id="width" type="number" value={newColor.width} onChange={e => setNewColor({...newColor,width:+e.target.value})}/>
        
                <button onClick={handleClick}>Create Box</button>
    
        </div>

    )

}
export default BoxForm;


