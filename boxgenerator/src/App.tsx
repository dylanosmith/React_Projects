import React, {useState} from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import Box from './components/Box';

function App() {
  const [colors, setColors] = useState(["red", "yellow", "blue"])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generate boxes</h1>
      </header>
      <BoxForm colors =  setColors = {setColors} />
      <div id ="box-area" >
        <Box color="blue" height={200} width={200} />
        <Box color="red" height={200} width={200} />
        <Box color="yellow" height={200} width={200} />
      </div>
    </div>
  );
}

export default App;
