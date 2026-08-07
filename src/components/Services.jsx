import React from "react";

const Services = () => {
  const services =[
    {id: 1, title: "LEGALIZAÇÃO", description: " Elaboração de contrato social, constituição de empresa, alterações contratuais, distrato social/baixa de CNPJ, emissão/renovação de certificado digital e certidões negativas junto à Órgãos Públicos. ", image: "/legalizacao.png"},
    {id: 2, title: "TRIBUTÁRIO", description: "Análise econômica para enquadramento tributário, orientação e emissão de notas fiscais, apuração de impostos, emissão e validação de guias, envio das obrigações acessórias, regularização e parcelamento de dívidas e recuperação tributária. ", image: "/tributario.png"},
    {id: 3, title: "DEPARTAMENTO PESSOAL", description: "Gestão da folha de pagamento, contracheque, admissões de funcionários, demissões e desligamentos, E-social, agendamento de férias, cálculo e emissão de encargos trabalhistas, envio da comunicação de acidente de trabalho, E-social doméstica. ", image: "/depPessoal.png"},
    {id: 4, title: "CONTABILIDADE", description: "Contabilização das operações financeiras e patrimoniais da companhia, emissão de balanço patrimonial, DRE, DMPL, SPED Contábil, distribuição de lucros, DIRF e demonstração de ajuste anual (IRPF).", image: "/contabilidade.png"},
    {id: 5, title: "MEI", description: "Consultoria e acompanhamento das receitas e despesas, abertura de CNPJ, alvará de licença para estabelecimento e validação para emissão de nota fiscal, parcelamento de guias em atraso, geração de guia mensal, declaração anual, encerramento de MEI.", image: "/mei.png"},
    {id: 6, title: "BPO", description: "Gerenciamento de receitas e despesa com ênfase em redução de custos, evolução patrimonial, controle de pagamentos e recebimentos, fluxo de caixa, gestão de indicadores e análise de crédito.", image: "/bpo.png"},
  ]
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">

      <div className="text-center my-8">
        <span className="kicker kicker-on-light mb-6">Clientes</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray900 mb-4">Alguns de nossos clientes</h2>
        <p className="text-neutralGray leading-relaxed max-w-2xl mx-auto">
          Junte-se aos nossos mais de 100 clientes satisfeitos e descubra como
          podemos impulsionar o sucesso da sua empresa com nossas soluções
          inovadoras e personalizadas.
        </p>
        <div className="my-12 flex flex-wrap justify-center items-center gap-12 md:gap-32">
          <img src='/logoDraAdvogados.svg' alt="logo clientes" className="w-[55px] h-[50px] max-w-full object-contain"/>
          <img src='/romanoElameiraoLogo.jpeg' alt="logo clientes" className="w-[55px] h-[50px] max-w-full object-contain"/>
          <img src='/altechLogo.jpeg' alt="logo clientes" className="w-[55px] h-[50px] max-w-full object-contain"/>
          <img src='/destino-latinoLogo.png' alt="logo clientes" className="w-[55px] h-[50px] max-w-full object-contain"/>
          <img src='/LogoIrmaoFandango.jpeg' alt="logo clientes" className="w-[55px] h-[50px] max-w-full object-contain"/>
          <img src='/Logo-InstalaRioRodape.png' alt="logo clientes" className="w-[55px] h-[50px] max-w-full object-contain"/>
        </div>
      </div>

      <div className="mt-20 md:w-1/2 mx-auto text-center" id="services">
        <span className="kicker kicker-on-light mb-6">Nossos serviços</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray900 mb-4">
          Tudo que sua empresa precisa, <span className="text-gradient-on-light">em um só lugar</span>
        </h2>
        <p className="text-neutralGray leading-relaxed">
          Confira abaixo os principais serviços prestados pela Decole.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-8">
        {
          services.map(service => <div key={service.id} className="px-6 py-10 text-center
          rounded-2xl border border-neutral-200 bg-white shadow-sm cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-blackPrimary transition-all
          duration-300 flex items-start justify-center h-full">
              <div>
                <div className="mb-6 h-14 w-14 mx-auto rounded-2xl bg-neutralSilver flex items-center justify-center">
                <img src={service.image} className="h-10 w-10 object-contain" alt="icons de serviços"/>
                </div>
                <h4 className="text-lg font-bold tracking-wide text-gray900 mb-3 px-2">{service.title}</h4>
                <p className="text-sm text-neutralGray leading-relaxed">{service.description}</p>
              </div>
          </div>)
        }
      </div>

    </div>
  );
};

export default Services;
