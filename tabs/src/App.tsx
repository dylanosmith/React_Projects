import React, {useState} from 'react';
import './App.css';

interface ButtonProps {
  textKey:() => void,
  label:string
  isSelected?: boolean
}

const Button:React.FC<ButtonProps> = ({textKey, label, isSelected}) => {
  return (
    <button onClick= {textKey} className = {isSelected?'selected': 'notSelected'}>Tab {label}</button>)
}

interface DisplayProps {
  message: string;
}

const Display:React.FC<DisplayProps> = ({message}) => {
  return (
    <div className = 'display'>
      {message}
    </div>
  );
}

function App() {
  const [textNumber, setTextNumber ] = useState<number>(0);
  const changeLogger = (incValue:number) => {
    setTextNumber(incValue)
  }

  const textOptions = [
    'Text for Tab A',
    'Text for Tab B',
    'Text for Tab C',
    'Text for Tab D',
  ]
  return (
    <div className="App">
      <Button textKey={() => changeLogger(0)} label ="A" isSelected = {true} />
      <Button textKey={() => changeLogger(1)} label ="B" />
      <Button textKey={() => changeLogger(2)} label ="C" />
      <Button textKey={() => changeLogger(3)} label ="D" />
      <Display message = {textOptions[textNumber]} />
    </div>
  );
}

export default App;
