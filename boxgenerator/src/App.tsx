import React, {useState} from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import Box from './components/Box';

export interface Colors {
  color:string;
  height:number;
  width:number;
}
function App() {
  
  const [colors, setColors] = useState<Colors[]>([
    {color:"red",height: 200, width: 200},
    {color:"yellow",height: 200, width: 200},
    {color:"blue",height: 200, width: 200}
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generate boxes</h1>
      </header>
      <BoxForm colors={colors}  setColors = {setColors} />
      <div id ="box-area" >
        {colors.map((color, i)=> (
          <Box key={i} color = {color.color} height={color.height} width ={color.width} />
        ))}
      </div>
    </div>
  );
}

export default App;
