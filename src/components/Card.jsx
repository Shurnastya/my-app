import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const Card = () => {
    return (
        <div className="App">
            <Menu/>
            <Header/>
            <h1>Корзина</h1>
            <Footer/>
        </div>
    );
};

export default Card;