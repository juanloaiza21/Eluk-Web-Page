import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import elukLogo from '../assets/elukLogo.png';


export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const showNavBar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("responsive_nav");
        }
    };
    return (

    <header>
        <h3 className='logo'><img className='logo image' src={elukLogo} alt="Eluk Logo" /></h3>
        <nav ref={navRef}>
            <a href='/#'>Principal</a>
            <a href='/#'>Sobre nosotros</a>
            <a href='/#'>Proyectos</a>
            <a href='/#'>Contacto</a>
            <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
            <FaBars />
        </button>
    </header>
  )
}
