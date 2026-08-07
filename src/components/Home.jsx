import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa6";
import imgApp from "/img_app.png";
import osTresEmCadeiras from "/osTresEmCadeiras_web.jpg";
import FloatingIcons from "./FloatingIcons";

const Home = () => {
  return (
    <div className="section-dark relative" id="home">
      <FloatingIcons />
      <div className="relative px-4 lg:px-14 max-w-screen-2xl mx-auto h-dvh md:h-screen overflow-hidden">
        <Carousel className="w-full mx-auto" slideInterval={9000} leftControl={<span></span>} rightControl={<span></span>}>
          <div className="my-4 md:my-8 py-4 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={osTresEmCadeiras}
                alt="três pessoas em cadeiras"
                className="h-[28vh] md:h-[45vh] w-auto max-w-full object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <span className="kicker kicker-on-dark mb-4 md:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                Contabilidade 100% digital
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-white leading-tight">
                Contabilidade simples,{" "}
                <span className="text-gradient-on-dark">sem burocracia.</span>
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 md:w-4/5">
                Focada no crescimento empresarial e profissional dos seus
                parceiros de negócios através de um sistema com tecnologia de
                ponta e um atendimento personalizado.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <a href="https://api.whatsapp.com/send?phone=5521968114544" target="_blank" rel="noopener noreferrer">
                  <button className="btn-light">
                    Entre em contato
                  </button>
                </a>
                <Link to="services" spy={true} smooth={true} offset={-100} className="btn-ghost-light cursor-pointer">
                  Conheça nossos serviços <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="my-4 md:my-8 py-4 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12 overflow-hidden">
            <div>
              <img
                src={imgApp}
                alt="imagem do aplicativo"
                className="h-[28vh] md:h-[40vh] max-h-[368px] w-auto max-w-full object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <span className="kicker kicker-on-dark mb-4 md:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                App exclusivo para clientes
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-white leading-tight">
                Tudo que você precisa{" "}
                <span className="text-gradient-on-dark">na palma da sua mão.</span>
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 md:w-4/5">
                Nosso app de contabilidade oferece uma solução simples e eficiente para gerenciar suas finanças empresariais,
                eliminando a burocracia e permitindo que você foque no que realmente importa: o crescimento do seu negócio.
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.decoleassessoria" target="_blank" rel="noopener noreferrer">
                <img src="/disponivelNaPlayStore.png" alt="Disponível no Google Play" className="h-14 max-w-full object-contain hover:opacity-80 transition-opacity rounded-xl" />
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
