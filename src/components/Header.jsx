import React from 'react';
import { Link } from 'react-router-dom';
import {MdOutlineSearch, MdFavoriteBorder, MdPersonOutline, MdOutlineShoppingCart} from 'react-icons/md'
import '../styles/components/Header.css'
const Header = () => {
  return (
    <nav className="Header">
      <h1 className="Header-title">
        <Link className='title' to="/">Clarence</Link>
      </h1>
        <div className="Navbar">
          <div className="Navbar-links">
            <Link className='Link-navbar' to="#">Hombre</Link>
            <Link className='Link-navbar' to="#">Ropa Deportiva</Link>
            <Link className='Link-navbar' to="#">Mujer</Link>
            <Link className='Link-navbar' to="#">Ropa Interior</Link>
          </div>
          <div className="Navbar-icons">
            <Link className='Link-navbar' to="#">
              <MdOutlineSearch />
            </Link>
            <Link className='Link-navbar' to="#">
              <MdFavoriteBorder />
            </Link>
            <Link className='Link-navbar' to="#">
              <MdPersonOutline />
            </Link>
            <Link className='Link-navbar' to="#">
              <MdOutlineShoppingCart />
            </Link>
          </div>
        </div> 
    </nav>
  );
}

export default Header