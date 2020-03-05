import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import Wrapper from './components/Wrapper';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
        <Wrapper items = {['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript']} />
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
        <div>
          <RegisterForm firstName = "" lastName= "" email = "" password = "" confirmPass = ""/>
        </div>

    </div>
  );
}
export default App;
