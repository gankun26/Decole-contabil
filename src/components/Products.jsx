import React from "react";

const Products = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              src="/app_decole.png"
              alt="app decole na palma da mao"
              className="w-[500] h-[500] max-w-full"
            />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              Saiba mais sobre os benefícios do nosso app exclusivo para
              clientes.
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-6">
            • Sistema 100% automatizado
            </p>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-6">
            • Dashboard sobre a saúde financeira da sua empres
            </p>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-6" >
            • Acesso a qualquer documento que você precisar (Contrato social,
              alvará CND, CPNJ, entre outros)
            </p>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-6">
            • Alertas e lembretes com prazos para pagamento das guias de taxas
              e impostos (anuais e mensais)
            </p>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-6">
            • Solicitações direto pelo APP (Dúvidas, serviços ou documentos
              que ainda não estejam presentes no APP)
            </p>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-6">
            • Comunicação rápida e prática com suporte direto pelo APP{" "}
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.decoleassessoria" target="_blank">
              <button className="btn-primary">
                  Baixar agora
              </button>
              </a>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 w-full mx-auto bg-neutralSilver py-16" id="faq">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3">
              Tá esperando o que? Se torne agora nosso parceiro e decole o seu
              negócio!{" "}
            </h2>
          </div>
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/zapzapIcon.svg" alt="icon zap" className="w-[55px] h-[50px] max-w-full"/>
                <div>
                    <h4 className="text-2xl text-neutralDGray font-semibold">
                    Bernardo Almeida
                    </h4>
                    <p>Fiscal | Departamento Pessoal</p>
                    <p>(21) 98289-4609</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/zapzapIcon.svg" alt="icon zap" className="w-[55px] h-[50px] max-w-full"/>
                <div>
                    <h4 className="text-2xl text-neutralDGray font-semibold">
                    Leonardo Pereira
                    </h4>
                    <p>Contabil | Legalização</p>
                    <p>(21)  99101-0288</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/zapzapIcon.svg" alt="icon zap" className="w-[55px] h-[50px] max-w-full"/>
                <div>
                    <h4 className="text-2xl text-neutralDGray font-semibold">
                    Thiago Santana
                    </h4>
                    <p>Financeiro | Comercia</p>
                    <p>(21) 98177-0066</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
