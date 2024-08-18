import React from "react";

const Services = () => {
  const services =[
    {id: 1, title: "LEGALIZAÇÃO", description: " Elaboração de contrato social, constituição de empresa, alterações contratuais, distrato social/baixa de CNPJ, emissão/renovação de certificado digital e certidões negativas junto à Órgãos Públicos ", image: "/legalizacao.png"},
    {id: 2, title: "TRIBUTÁRIO", description: "Análise econômica para enquadramento tributário, orientação e emissão de notas fiscais, apuração de impostos, emissão e validação de guias, envio das obrigações acessórias, regularização e parcelamento de dívidas e recuperação tributária. ", image: "/tributario.png"},
    {id: 3, title: "DEPARTAMENTO PESSOAL", description: "Gestão da folha de pagamento, contracheque, admissões de funcionários, demissões e desligamentos, E-social, agendamento de férias, cálculo e emissão de encargos trabalhistas, envio da comunicação de acidente de trabalho, E-social doméstica. ", image: "/depPessoal.png"},
    {id: 4, title: "CONTABILIDADE", description: "Contabilização das operações financeiras e patrimoniais da companhia, emissão de balanço patrimonial, DRE, DMPL, SPED Contábil, distribuição de lucros, DIRF e demonstração de ajuste anual (IRPF", image: "/contabilidade.png"},
    {id: 5, title: "MEI", description: "Consultoria e acompanhamento das receitas e despesas, abertura de CNPJ, alvará de licença para estabelecimento e validação para emissão de nota fiscal, parcelamento de guias em atraso, geração de guia mensal, declaração anual, encerramento de MEI.", image: "/mei.png"},
    {id: 6, title: "BPO", description: "Gerenciamento de receitas e despesa com ênfase em redução de custos, evolução patrimonial, controle de pagamentos e recebimentos, fluxo de caixa, gestão de indicadores e análise de crédito.", image: "/bpo.png"},
  ]
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">

      <div className="text-center my-8"> 
        <h2 className="text-2xl text-neutralDGray font-semibold mb-2">Alguns de nossos clientes</h2>
        <p className="text-neutralDGray">
          Junte-se aos nossos mais de 100 clientes satisfeitos e descubra como
          podemos impulsionar o sucesso da sua empresa com nossas soluções
          inovadoras e personalizadas.
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8"> 
          <img src='/visa.png' alt="logo clientes" className="w-[55px] h-[50px] max-w-full"/>
          <img src='/huawei.png' alt="logo clientes" className="w-[55px] h-[50px] max-w-full"/>
          <img src='/meta.png' alt="logo clientes" className="w-[55px] h-[50px] max-w-full"/>
          <img src='/netflix.png' alt="logo clientes" className="w-[55px] h-[50px] max-w-full"/>
          <img src='/discord.png' alt="logo clientes" className="w-[55px] h-[50px] max-w-full"/>
        </div>
      </div>

      <div className="mt-20 md:w-1/2 mx-auto text-center" id="services">
      <h2 className="text-2xl text-neutralDGray font-semibold mb-2">Nossos principais serviços</h2>
        <p className="text-neutralDGray">
          Confira abaixo os principais serviços prestados pela Decole.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid:cols-1 md:w-11/12 mx-auto gap-12">
        {
          services.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 
          rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-purple-700 transition-all 
          duration-300 flex items-center justify-center h-full">
              <div>
                <div className="mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl bg-[#F5F7FA] ">
                <img src={service.image} className="-ml-5  h-12 w-12" alt="icons de serviços"/>
                </div>
                <h4 className="text-2x1 font-bold text-neutralDGray mb-2 px-2">{service.title}</h4>
                <p className="text-sm text-neutralDGray">{service.description}</p>
              </div>
          </div>)
        }
      </div>

    </div>
  );
};

export default Services;
