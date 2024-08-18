import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from '/Icone_preto_Decole_fundo_transparente.png'

const MyFooter = () => {
  return (
    <Footer container>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className='space-y-4 mb-8'>
        <a href="" className="text-2x1 font-semibold flex items-center space-x-3"><img src={logo}
                alt="" className="w-10 inline-block items-center"/><span className="text-[#263238]">Decole</span>
        </a>
        <div>
          <p className='text-neutralDGray'>Todos os direitos reservados.</p>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">

        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright  by="Decole." year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="https://www.instagram.com/decolecontabil?igsh=bXQ2bzJoMjR2OXB6" target="_blank" icon={BsInstagram} />
          <Footer.Icon href="https://www.linkedin.com/company/decole-assessoria-cont%C3%A1bil/" target="_blank" icon={BsLinkedin} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter;
