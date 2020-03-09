import React, { useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';



function App() {
  const [name, setName] = useState("Bob");
  return (

      <Wrapper>
        <Navbar />
        <FormWrapper />
      </Wrapper>
  );
}

export default App;
