import React from 'react';
import './App.css';
import Main from './components/main';
import Heading from './components/heading'
import Footer from './components/footer'

function App() {
  return (
    <>
    <div className="Heading">
      <Heading />
      </div>
    <div className="App">
      <Main />
    </div>
    <div className="footer">
    <Footer />
    </div>
    </>
  );
}

export default App;
