import React from "react";
import Image from "next/image";

const ClientesSection = () => {
  const clientes = [
    {
      nome: "Empresa Alpha",
      descricao: "A Empresa Alpha utiliza nossas soluções para otimizar suas operações de vendas.",
      logo: "/images/clientes/alpha-logo.png",
    },
    {
      nome: "Empresa Beta",
      descricao: "Com nossas ferramentas, a Empresa Beta melhorou significativamente seu atendimento ao cliente.",
      logo: "/images/clientes/beta-logo.png",
    },
    {
      nome: "Empresa Gamma",
      descricao: "A Empresa Gamma expandiu sua presença no mercado utilizando nossas estratégias de marketing.",
      logo: "/images/clientes/gamma-logo.png",
    },
    // Adicione mais clientes conforme necessário
  ];

  return (
    <section id="clientes" className="py-24 bg-gray-100 dark:bg-boxdark">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-black dark:text-white">
          Nossos Clientes
        </h2>
        <div className="flex flex-wrap justify-center gap-16">
          {clientes.map((cliente, index) => (
            <div key={index} className="w-full md:w-1/4 px-6">
              <div className="bg-white dark:bg-boxdark rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={cliente.logo}
                  alt={`${cliente.nome} Logo`}
                  width={150}
                  height={150}
                  className="mx-auto mb-4 object-contain h-24"
                />
                <h3 className="text-2xl font-medium mb-2 text-black dark:text-white">
                  {cliente.nome}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {cliente.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientesSection; 