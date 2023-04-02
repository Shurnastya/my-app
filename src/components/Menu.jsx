import React from "react";

const Menu = () => {
    return (
            <section className="menu">
                <div className="wrapper">
                    <div className="location">
                        <span className="icon__mark"></span>
                        <div className="wrapper__location">
                            <h2>г. Кокчетав, ул. Ж. Ташенова 129Б</h2>
                            <p>(Рынок Восточный)</p>
                        </div>
                    </div>
                    <div className="contact">
                        <span className="icon__email"></span>
                        <div className="wrapper__contact">
                            <h2>opt.sultan@mail.ru</h2>
                            <p>На связи в любое время</p>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Доставка и оплата</a></li>
                            <li><a href="#">Возврат</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>

                </div>

                <div class="hidden-menu">
                    <input type="checkbox"/>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    
                    <div class="header__toggle-menu" >
                        <nav class="nav-toggle">
                            <ul>
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Доставка и оплата</a></li>
                            <li><a href="#">Возврат</a></li>
                            <li><a href="#">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>                
                </div>
            </section>
    );
};

export default Menu;