import React from 'react'
import './Header.scss'
import logo from '../../img/logo.png'
function Header() {
    return (
        <div className='container'>
            <div className="header">
                <div className="navbar">

                    <img className='header__img' src={logo} alt="" />
                    <h1 className='header__text'>
                        Behoof
                    </h1>
                    <p className='header__item'>
                        Лучшие цены
                        в интернет-магазинах
                    </p>
                    <select className='header__select' name="" id="">
                        <option value="Каталог товаров">Каталог товаров</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header