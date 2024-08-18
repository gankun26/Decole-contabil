import React from 'react'

function About() {
  return (
    <div>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src='/about_team.svg' alt='imagem sobre' className='w-[440px] h-[440px] max-w-full'/>
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5'>
                A Decole Assessoria Contábil tem uma visão inovadora sobre o conceito de um 
                escritório de contabilidade.
                </h2>
                <p className='md:w-3/4 text-sm text-neutralDGray mb-8'>
                Temos como missão criar e cultivar valores para nossos clientes atuando sempre 
                em conformidade com a legislação, auxiliando-os com informações seguras 
                para tomadas de decisões. Nossa visão é ser referência pelos serviços prestados 
                em contabilidade, ser reconhecida pela ênfase na ética e na responsabilidade 
                social, na prestação dos serviços de  qualidade e eficiência.
                </p>
                <p className='md:w-3/4 text-sm text-neutralDGray mb-8'>
                Zelamos pela confiança, sigilo, respeito, ética profissional e pessoal, segurança e 
                transparência para os nossos parceiros, temos comprometimento com a pontualidade e assiduidade e com os serviços prestados.
                </p>
                <a href="https://api.whatsapp.com/send?phone=5521981770066" target="_blank">
              <button className="btn-primary">
                  Entre em contato
              </button>
              </a>
            </div>
        </div>
      </div>

      <div className='px-4 lg:px-14 w-full mx-auto bg-neutralSilver py-16'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
              <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3'>Estamos sediados no 
                Condomínio Dimension na Av. Embaixador Abelardo Bueno, 
                nº 1 - Jacarepaguá, Rio de Janeiro. </h2>
            </div>
            <div>
              <div>
                <div className='flex items-center gap-4'>
                    <img src='/localMaps.png'/>
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default About
