import React from 'react';
import './App.css';
import Tab from './components/Tab';


function App() {
  return (
    <div className="App">
      <div id="tab_bar">
        <Tab 
          index={1} label = {"Tab1"} content = {"In a while crocodile"} isSelected ={true}>
        </Tab>
        <Tab 
          index ={2} label = {"Tab2"} content = {"Take a break bro!"} isSelected = {false}>
        </Tab>
        <Tab index ={3} label = {"Tab3"} content = {"So freaking cool!"} isSelected = {false}/>
      </div>
    </div>
  );
}

export default App;
