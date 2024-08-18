import React from "react";
import { Carousel } from "flowbite-react";
import apertoMao from "/aperto_de_mao_man.svg";
import imgApp from "/img_app.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={apertoMao} alt="duas pessoas apertando as mãos" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Contabilidade simples, sem{" "}
                <span className="text-blackPrimary leading-snug">
                  burocracias.
                </span>{" "}
                Focada no seu crescimento empresarial.
              </h1>
              <p className="text-neutralDGray text-base mb-8">
                {" "}
                Focada no crescimento empresarial e profissional dos seus
                parceiros de negócios através de um sistema com tecnologia de
                ponta e um atendimento personalizado.
              </p>
              <a href="https://api.whatsapp.com/send?phone=5521981770066" target="_blank">
              <button className="btn-primary">
                  Entre em contato
              </button>
              </a>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={imgApp}  alt="imagem do aplicativo" className="w-[400px] h-[600px] max-w-full" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Temos tudo que você precisa na palma da sua mão,{" "}
                <span className="text-blackPrimary leading-snug">
                  contabilidade 100% digital.
                </span>{" "}
                Conheça nosso APP exclusivo para clientes
              </h1>
              <p className="text-neutralDGray text-base mb-8">
                {" "}
                Nosso app de contabilidade oferece uma solução simples e eficiente para gerenciar suas finanças empresariais, 
                eliminando a burocracia e permitindo que você foque no que realmente importa: o crescimento do seu negócio. 
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.decoleassessoria" target="_blank">
              <button className="btn-primary">
                  Baixar agora
              </button>
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
