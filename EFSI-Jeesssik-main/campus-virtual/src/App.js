import React from 'react';
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Banner from "./componentes/banner";
import Card from "./componentes/card";
import Gallery from "./componentes/gallery";
import './App.css';

function App() {
  console.log(Header)
  return (
    <>
    <Header />
    <br></br>
    <Banner />
    <br></br><br></br>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-6">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-6">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
      </div>
    </div>
    <Gallery />
    <Footer /> 
      
    </>
  );
}

export default App;
