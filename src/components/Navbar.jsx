import React, { useEffect, useState } from "react";
import logoPreto from '/Icone_preto_Decole_fundo_transparente.png'
import logoBranco from '/iconebrancofundotransparente.png'
import { Link } from 'react-scroll';

import { FaXmark, FaBars } from "react-icons/fa6";
import '../App.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsStick] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsStick(true);
      } else {
        setIsStick(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Serviços", path: "services" },
    { link: "Sobre", path: "about" },
    { link: "Produtos", path: "product" },
    { link: "FAQ", path: "faq" },
  ];

  return(
    <header className="w-full fixed top-0 left-0 right-0">
        <nav className={`py-4 lg:px-14 px-4 transition-all duration-300 ${isSticky ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm" : "bg-transparent"}`}>
            <div className="flex justify-between items-center text-base gap-8 ">
                <a href="" className="text-2xl font-semibold flex items-center space-x-3">
                  <img src={isSticky ? logoPreto : logoBranco} alt="logo Decole" className="w-10 inline-block items-center"/>
                  <span className={`tracking-tight transition-colors duration-300 ${isSticky ? "text-gray900" : "text-white"}`}>Decole</span>
                </a>
                <ul className="md:flex space-x-12 hidden">
                    {
                        navItems.map(({link, path}) => <Link  to={path} key={path} spy={true} smooth={true} offset={-100}
                        className={`block cursor-pointer text-sm font-medium transition-colors duration-300 ${isSticky ? "text-gray900 hover:text-neutralGray" : "text-white/80 hover:text-white"}`}
                        >{link}</Link>)
                    }
                </ul>
                <div className="space-x-12 hidden lg:flex items-center">
                    <a href="/" className="hidden">Login</a>
                    <button className="hidden">Sign up</button>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className={`focus:outline-none transition-colors duration-300 ${isSticky ? "text-gray900" : "text-white"}`}>
                        {
                          isMenuOpen ? (<FaXmark className="h-6 w-6"/>) : (<FaBars className="h-6 w-6 "/>)
                        }
                    </button>
                </div>
            </div>
            <div className={`space-y-4 px-6 mt-16 py-7 bg-blackPrimary border-b border-white/10 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({link, path}) => <Link  to={path} key={path} spy={true} smooth={true} offset={-100}
                        onClick={toggleMenu}
                        className="block cursor-pointer text-base font-medium text-white/80 hover:text-white transition-colors"
                        >{link}</Link>)
                    }
            </div>
        </nav>
    </header>
  );

};

export default Navbar;
