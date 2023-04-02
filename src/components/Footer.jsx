import React from "react";

const Footer = () => {
    return (
            <section className="footer">
                <div className="wrapper">
                    <div className="info__block">
                        <div className="logo__footer"></div>
                        <h2>Компания «Султан» — снабжаем розничные магазины товарами 
                        "под ключ" в Кокчетаве и Акмолинской области</h2>
                        <p>Подпишись на скидки и акции</p>
                        <form className="footer__email">
                            <span></span>
                            <input type="text" name="email" placeholder="Введите ваш E-mail"/>
                        </form>
                    </div>

                    <div className="footer__wrapper-mobile">
                        <div className="footer__menu">
                            <h2>Меню сайта:</h2>
                            <ul>
                                <li><a href="#">О компании</a></li>
                                <li><a href="#">Доставка и оплата</a></li>
                                <li><a href="#">Возврат</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </div>

                        <div className="footer__menu">
                            <h2>Категории:</h2>
                            <ul>
                                <li><a href="#">Бытовая химия</a></li>
                                <li><a href="#">Косметика и гигиена</a></li>
                                <li><a href="#">Товары для дома</a></li>
                                <li><a href="#">Товары для детей и мам</a></li>
                                <li><a href="#">Посуда</a></li>
                            </ul>
                        </div>

                        <div className="footer__prise">
                            <h2>Скачать прайс-лист:</h2>
                            <button className="btn__prise">
                                <a>Прайс лист</a>
                                <span></span>
                            </button>
                            <p>Связь в мессенджерах:</p>
                            <div className="wrapper__social">
                                <span className="whatsapp"></span>
                                <span className="telegram"></span>
                            </div>
                        </div>

                        <div className="footer__contact">
                            <h2>Контакты:</h2>
                            <h3>+7 (777) 490-00-91</h3>
                            <p>время работы: 9:00-20:00</p>
                            <a>Заказать звонок</a>
                            <h3>opt.sultan@mail.ru</h3>
                            <p>На связи в любое время</p>
                            <div className="wrapper__pay">
                                <span className="visa"></span>
                                <span className="mastercard"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Footer;