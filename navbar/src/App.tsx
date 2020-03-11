import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavProvider from './components/NavContext';
import FormWrapper from './components/FormWrapper';



function App() {
  return (
    <div className = "App">
        <NavProvider>
          <Navbar />
          <FormWrapper />
        </NavProvider>
    </div>
  );
}

export default App;
