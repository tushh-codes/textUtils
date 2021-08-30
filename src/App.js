import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const App = () => {
  return (
    <>
      <Navbar title='TextUtils' />

      <TextForm heading='Enter Your Text Below' />
    </>
  );
};

export default App;
