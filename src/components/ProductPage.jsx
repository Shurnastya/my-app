import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const ProductPage = (props) => {
    const {match} = props;
    const {id} = match.params;

    return (
        <div>
            <Menu/>
            <Header/>
            <h1>Страница товара{id}</h1>
            <Footer/>
        </div>
    )
}

export default ProductPage;