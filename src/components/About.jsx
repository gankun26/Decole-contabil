import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

function About() {
  return (
    <div>
      <div className='section-light overflow-hidden' id='about'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 md:w-11/12 flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='relative'>
                <div className='absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-neutral-300 via-transparent to-neutral-200 rounded-[2.5rem] blur-2xl opacity-70' aria-hidden="true"></div>
                <div className='absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-neutral-200' aria-hidden="true"></div>
                <img src='/bernardoNaMesa.jpg' alt='imagem sobre' className='relative w-[500px] h-[450px] max-w-full object-cover rounded-3xl shadow-xl'/>
                <div className='absolute -top-6 -left-2 md:-left-6 bg-blackPrimary text-white rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3'>
                  <span className='w-9 h-9 rounded-full bg-white/10 flex items-center justify-center'>
                    <FaArrowTrendUp className='w-4 h-4' />
                  </span>
                  <div>
                    <p className='text-xl font-bold leading-none'>+100</p>
                    <p className='text-xs text-neutral-400 mt-1'>clientes satisfeitos</p>
                  </div>
                </div>
            </div>
            <div className='md:w-3/5 mx-auto'>
                <span className='kicker kicker-on-light mb-6'>Sobre nós</span>
                <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-gray900 mb-6 md:w-4/5 leading-tight'>
                Uma visão <span className='text-gradient-on-light'>inovadora</span> sobre o conceito de um
                escritório de contabilidade.
                </h2>
                <p className='md:w-3/4 text-base text-neutralDGray leading-relaxed mb-6'>
                Temos como missão criar e cultivar valores para nossos clientes atuando sempre
                em conformidade com a legislação, auxiliando-os com informações seguras
                para tomadas de decisões. Nossa visão é ser referência pelos serviços prestados
                em contabilidade, ser reconhecida pela ênfase na ética e na responsabilidade
                social, na prestação dos serviços de  qualidade e eficiência.
                </p>
                <p className='md:w-3/4 text-base text-neutralDGray leading-relaxed mb-8'>
                Zelamos pela confiança, sigilo, respeito, ética profissional e pessoal, segurança e
                transparência para os nossos parceiros, temos comprometimento com a pontualidade e assiduidade e com os serviços prestados.
                </p>
                <a href="https://api.whatsapp.com/send?phone=5521968114544" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">
                  Entre em contato
              </button>
              </a>
            </div>
        </div>
      </div>

      <div className='px-4 lg:px-14 w-full mx-auto bg-neutralSilver py-16'>
          <div className='max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
              <span className='kicker kicker-on-light bg-white mb-6'>Onde estamos</span>
              <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-gray900 mb-4 md:w-3/4 leading-tight'>
                Estamos sediados no <span className='text-gradient-on-light'>Worldwide Office</span>
              </h2>
              <p className='text-neutralDGray leading-relaxed md:w-2/3'>
                N 200 BL 1B Sala 1009 a 1013 — Jacarepaguá, Rio de Janeiro.
              </p>
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-3'>
              <div className='flex items-center gap-2 text-blackPrimary font-semibold text-sm uppercase tracking-wide'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Nossa localização
              </div>
              <div className='rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/10'>
                <iframe
                  title="Localização Decole Contábil"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d-43.3663449!3d-22.971395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd751af886a55%3A0x6387e3121aaa225b!2sDecole%20Assessoria%20Cont%C3%A1bil!5e1!3m2!1spt-BR!2sbr!4v1747000000000"
                  width="100%"
                  height="420"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/place/Decole+Assessoria+Cont%C3%A1bil/@-22.971395,-43.3663449,125m/data=!3m1!1e3!4m6!3m5!1s0x9bd751af886a55:0x6387e3121aaa225b!8m2!3d-22.971395!4d-43.3663449!16s%2Fg%2F11rnfhbm9l"
                target="_blank"
                rel="noopener noreferrer"
                className='text-xs text-neutralDGray underline text-center hover:text-blackPrimary transition-colors'
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
      </div>

    </div>
  )
}

export default About
