import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const [tabs, setTabs] = useState<string[]>(["Tab1", "Tab2", "Tab3"])
  //tabs is now equal to string[] and values "Tab1", "Tab2" and "Tab3"
  return (
    <div className="App">
      
      <Tabs />
      
    
    </div>
  );
}

export default App;
