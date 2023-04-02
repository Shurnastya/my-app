import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from "./components/Card";
import ProductPage from "./components/ProductPage";
import Home from "./Home";
import './style/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/product:id" element={<ProductPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
