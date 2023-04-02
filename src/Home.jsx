import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Product from "./components/Product";
import './style/App.css';

function Home() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default Home;