import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
            <section className="header">
                <div className="wrapper">
                    <div className="logo"></div>
                    <button className="btn__catalog">
                        <a>Каталог</a>
                        <span></span>
                    </button>

                    <form className="search">
                        <span></span>
                        <input type="text" name="search" placeholder="Поиск..."/>
                    </form>

                    <div className="manager">
                        <div className="wrapper__manager">
                            <h2>+7 (777) 490-00-91</h2>
                            <p>время работы: 9:00-20:00</p>
                            <a>Заказать звонок</a>
                        </div>
                        <div className="wrapper__photo-manager">
                            <div className="photo__manager"></div>
                            <div className="round"></div>
                        </div>
                    </div>

                    <button className="btn__prise">
                        <a>Прайс лист</a>
                        <span></span>
                    </button>

                    <div className="cart">
                        <span></span>
                        <div className="cart__round">0</div>
                        <div className="wrapper__cart">
                            <Link to="/card">Корзина</Link>
                            <h2>0 ₸ </h2>
                        </div>
                    </div>

                </div>
            </section>

    );
};

export default Header;