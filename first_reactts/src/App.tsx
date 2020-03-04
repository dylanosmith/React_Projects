import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div >
        <PersonCard firstName = "Shane" lastName = "Smith" age={1} hairColor ={"Brown"}/>
      </div>
      <div >
        <PersonCard firstName = "Dylan" lastName = "Smith" age={33} hairColor ={"Brown"}/>
      </div>
      <div>
        <PersonCard firstName = "Jina" lastName = "Smith" age={32} hairColor ={"Brown"}/>
      </div>
      <div>
        <PersonCard firstName = "Zoe" lastName = "Smith" age={3} hairColor ={"Brown"}/>
      </div>
    </div>
  );
}
export default App;
