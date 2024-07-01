import React from 'react';
import vendoFilhotes from './assets/vendo filhotes.jpg';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Pastor Alemão</h1>
      <h2>Cão de guarda</h2>
      <img src={vendoFilhotes} alt="Pastor Alemão" />
      <Footer />
    </div>
  );
}

export default App;
