import React from 'react';
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Banner from "./componentes/banner";
import Gallery from "./componentes/gallery";
import './App.css';

function App() {
  console.log(Header)
  return (
    <>
    <Header />
    <Banner />
    <Gallery />
    <Footer /> 
      
    </>
  );
}

export default App;
