import React from "react";
import product from '../product.json';
import {Link} from 'react-router-dom';

const Product = () => {

    return (
            <section className="product">

                <div className="mobile__menu">
                    <button className="btn__catalog-mobile">
                        <a>Каталог</a>
                        <span></span>
                    </button>
                    <button className="btn__search-mobile">
                        <span></span>
                        <a>Поиск</a>
                    </button>
                </div>

                <div className="wrapper">
                    <div className="product__header">
                        <h2>Главная</h2>
                        <a>Косметика и гигиена</a>
                    </div>
                    <div className="name__wrapper">
                        <h1>Косметика и гигиена</h1>
                        <div className="sort__wrapper">
                            <h2>Сортировка:</h2>
                            <select name="sort">
                                <option value="1">Название</option>
                                <option value="2">По цене</option>
                                <option value="3">По убыванию</option>
                                <option value="4">По возрастанию</option>
                            </select>
                        </div>
                    </div>
                    <ul className="list">
                        <li><a>Уход за телом</a></li>
                        <li><a>Уход за руками</a></li>
                        <li><a>Уход за ногами</a></li>
                        <li><a>Уход за лицом</a></li>
                        <li><a>Уход за волосами</a></li>
                        <li><a>Средства для загара</a></li>
                        <li><a>Средства для бритья</a></li>
                        <li><a>Подарочные наборы</a></li>
                        <li><a>Гигиеническая продукция</a></li>
                        <li><a>Гигиена полости рта</a></li>
                        <li><a>Бумажная продукция</a></li>
                    </ul>
                    <div className="filter__wrapper">
                        <div className="filter">
                            <h2>ПОДБОР ПО ПАРАМЕТРАМ</h2>
                            <p>Цена <b>₸</b></p>
                            <form className="cost">
                                <input type="text" name="cost" placeholder="0"/>
                                <p>-</p>
                                <input type="text" name="cost" placeholder="10 000"/>
                            </form>
                            <h2>Производитель</h2>
                            <form className="search">
                                <span></span>
                                <input type="text" name="search" placeholder="Поиск..."/>
                            </form>
                            <form className="form__brend">
                                <input type="checkbox" name="grifon"/>
                                <label for="grifon">Grifon</label>
                                <p>(56)</p>
                            </form>
                            <form className="form__brend">
                                <input type="checkbox" name="boyscout"/>
                                <label for="boyscout">Boyscout</label>
                                <p>(66)</p>
                            </form>
                            <form className="form__brend">
                                <input type="checkbox" name="paclan"/>
                                <label for="paclan">Paclan</label>
                                <p>(166)</p>
                            </form>
                            <form className="form__brend">
                                <input type="checkbox" name="bulgary"/>
                                <label for="bulgary">Булгари Грин</label>
                                <p>(21)</p>
                            </form>
                            <div className="view__all">
                                <p>Показать все</p>
                                <span></span>
                            </div>
                            <ul>
                                <li><a>Уход за телом</a></li>
                                <li><a>Уход за руками</a></li>
                                <li><a>Уход за ногами</a></li>
                                <li><a>Уход за лицом</a></li>
                                <li><a>Уход за волосами</a></li>
                                <li><a>Средства для загара</a></li>
                                <li><a>Средства для бритья</a></li>
                                <li><a>Подарочные наборы</a></li>
                                <li><a>Гигиеническая продукция</a></li>
                                <li><a>Гигиена полости рта</a></li>
                                <li><a>Бумажная продукция</a></li>
                            </ul>
                        </div>
                        <div className="wrapper__about-product">
                            <div className="product__wrapper">
                                {product.product.map(product => (
                                    <Link to={`/product/${product.id}`} key={product.id}>
                                    <div className="product__cart" key={product.id}>
                                        <img src={product.img} alt="image" />
                                        <p>{product.size}</p>
                                        <h2><b>{product.name}</b>{product.description}</h2>
                                        <div className="barcode">
                                            <h3>Штрихкод:</h3>
                                            <p>{product.barcode}</p>
                                        </div>
                                        <div className="manufacturer">
                                            <h3>Производитель:</h3>
                                            <p>{product.manufacturer}</p>
                                        </div>
                                        <div className="brand">
                                            <h3>Бренд:</h3>
                                            <p>{product.brand}</p>
                                        </div>
                                        <div className="prise">
                                            <h2>{product.prise}</h2>
                                            <p>₸</p>
                                            <button className="btn__prise">
                                                <a>В КОРЗИНУ</a>
                                                <span></span>
                                            </button>
                                        </div>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                        
                            <div className="pages">
                                    <span className="arrow__left"></span>
                                    <p>1</p>
                                    <p>2</p>
                                    <span className="arrow__right"></span>
                                </div>

                                <div className="about__product">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
    );
};

export default Product;