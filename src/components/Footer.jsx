import React from 'react'
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import logoBranco from '/iconebrancofundotransparente.png'
import FloatingIcons from "./FloatingIcons";

const MyFooter = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 relative overflow-hidden">
      <FloatingIcons count={4} />
      <div className="relative max-w-screen-2xl mx-auto px-4 lg:px-14 py-12">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div className='space-y-4'>
            <a href="" className="text-2xl font-semibold flex items-center space-x-3">
              <img src={logoBranco} alt="logo Decole" className="w-10 inline-block items-center"/>
              <span className="text-white tracking-tight">Decole</span>
            </a>
            <p className='text-neutral-500 text-sm'>Todos os direitos reservados.</p>
          </div>
          <div className="flex items-start space-x-5 sm:justify-end">
            <a href="https://www.instagram.com/decolecontabil?igsh=bXQ2bzJoMjR2OXB6" target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors">
              <BsInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/decole-assessoria-cont%C3%A1bil/" target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors">
              <BsLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-neutral-500 text-sm">© 2026 Decole. Contabilidade simples, sem burocracia.</p>
        </div>
      </div>
    </footer>
  )
}

export default MyFooter;
