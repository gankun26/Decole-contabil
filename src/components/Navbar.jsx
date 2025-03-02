import React, { useEffect, useState } from "react";
import logo from '/Icone_preto_Decole_fundo_transparente.png'
//import { Link } from 'react-router-dom';
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
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [ 
    { link: "Home", path: "home" },
    { link: "Serviços", path: "services" },
    { link: "Sobre", path: "about" },
    { link: "Produtos", path: "product" },
    { link: "FAQ", path: "faq" },
  ];

  return(
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
            <div className="flex justify-between items-center text-base gap-8 ">
                <a href="" className="text-2x1 font-semibold flex items-center space-x-3"><img src={logo}
                alt="" className="w-10 inline-block items-center"/><span className="text-[#263238]">Decole</span></a>
                <ul className="md:flex space-x-12 hidden">
                    {
                        navItems.map(({link, path}) => <Link  to={path} key={path} spy={true} smooth={true} offset={-100}
                        className="block cursor-pointer text-base text-gray900 hover:text-blackPrimary first:font-medium"
                        >{link}</Link>)
                    }
                </ul>
                <div className="space-x-12 hidden lg:flex items-center">
                    <a href="/" className="hidden lg:flex items-center text-blackPrimary hover:text-neutralGray">Login</a>
                    <button className="bg-blackPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">Sign up</button>
                </div>
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="text-neutralDGray focus:outline-none focus:text-gray-500">
                        {
                          isMenuOpen ? (<FaXmark className="h-6 w-6"/>) : (<FaBars className="h-6 w-6 "/>)
                        }
                    </button>
                </div>
            </div>
            <div className={`space-y-4 px-4 mt-16 py-7 bg-blackPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({link, path}) => <Link  to={path} key={path} spy={true} smooth={true} offset={-100} 
                        className="block text-base text-neutralSilver hover:text-neutralDGray first:font-medium"
                        >{link}</Link>)
                    }
            </div>
        </nav>
    </header>
  );

};

export default Navbar;
