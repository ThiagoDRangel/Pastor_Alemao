import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Breeds from '../components/Breeds';
import Cards from '../components/Cards';


function App() {
  return (
    <div className="App">
      <Header />
      <Breeds />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
