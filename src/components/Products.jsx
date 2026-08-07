import React from "react";
import { FaCheck } from "react-icons/fa6";
import FloatingIcons from "./FloatingIcons";

const Products = () => {
  const beneficios = [
    "Sistema 100% automatizado",
    "Dashboard sobre a saúde financeira da sua empresa",
    "Acesso a qualquer documento que você precisar (Contrato social, alvará CND, CNPJ, entre outros)",
    "Alertas e lembretes com prazos para pagamento das guias de taxas e impostos (anuais e mensais)",
    "Solicitações direto pelo APP (Dúvidas, serviços ou documentos que ainda não estejam presentes no APP)",
    "Comunicação rápida e prática com suporte direto pelo APP",
  ];

  const contatos = [
    { nome: "Bernardo Almeida", area: "Legalização | Departamento Pessoal", telefone: "(21) 98289-4609", link: "https://api.whatsapp.com/send?phone=5521982894609" },
    { nome: "Leonardo Pereira", area: "Contábil | Fiscal", telefone: "(21) 99101-0288", link: "https://api.whatsapp.com/send?phone=5521991010288" },
    { nome: "Thiago Santana", area: "Financeiro | Comercial", telefone: "(21) 98177-0066", link: "https://api.whatsapp.com/send?phone=5521981770066" },
    { nome: "Escritório", area: "Atendimento Geral", telefone: "(21) 96811-4544", link: "https://api.whatsapp.com/send?phone=5521968114544" },
  ];

  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 py-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              src="/app_decole.png"
              alt="app decole na palma da mao"
              className="w-[500px] max-w-full h-auto object-contain rounded-3xl shadow-xl"
            />
          </div>
          <div className="md:w-3/5 mx-auto">
            <span className="kicker kicker-on-light mb-6">Nosso app</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray900 mb-8 md:w-4/5 leading-tight">
              Saiba mais sobre os benefícios do nosso{" "}
              <span className="text-gradient-on-light">app exclusivo</span> para clientes.
            </h2>
            <ul className="space-y-4 mb-10 md:w-11/12">
              {beneficios.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blackPrimary text-white flex items-center justify-center">
                    <FaCheck className="w-2.5 h-2.5" />
                  </span>
                  <p className="text-base text-neutralGray leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            <a href="https://play.google.com/store/apps/details?id=com.decoleassessoria" target="_blank" rel="noopener noreferrer">
              <img src="/disponivelNaPlayStore.png" alt="Disponível no Google Play" className="h-14 max-w-full object-contain hover:opacity-80 transition-opacity rounded-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#050505] px-4 lg:px-14 w-full mx-auto py-20 relative overflow-hidden" id="faq">
        <FloatingIcons />
        <div className="relative max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2">
            <span className="kicker kicker-on-dark mb-6">Fale conosco</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 md:w-4/5 leading-tight">
              Se torne agora nosso parceiro e{" "}
              <span className="text-gradient-on-dark">decole o seu negócio!</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed md:w-3/4">
              Fale diretamente com nossa equipe pelo WhatsApp e receba um
              atendimento personalizado.
            </p>
          </div>
          <div className="w-full md:w-1/2 grid sm:grid-cols-2 grid-cols-1 gap-4">
            {contatos.map((contato) => (
              <a
                key={contato.nome}
                href={contato.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <img src="/zapzapIcon.svg" alt="icon whatsapp" className="w-11 h-11 flex-shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-white">{contato.nome}</h4>
                  <p className="text-xs text-neutral-400 mb-1">{contato.area}</p>
                  <p className="text-sm text-neutral-300">{contato.telefone}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
