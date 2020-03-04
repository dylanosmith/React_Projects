import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import LoginForm from './components/LoginForm';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <MyComponent/>
      <LoginForm/>
      <PersonCard firstName ={"Jane"} lastName = {"Doe"} age = {45} hairColor = {"black"}/>
      <PersonCard firstName ={"John"} lastName = {"Smith"} age = {88} hairColor = {"brown"}/>
      <PersonCard firstName ={"Millard"} lastName = {"Fillmore"} age = {50} hairColor = {"brown"}/>
      <PersonCard firstName ={"Maria"} lastName = {"Smith"} age = {62} hairColor = {"brown"}/>

    </div>
  );
}

export default App;
