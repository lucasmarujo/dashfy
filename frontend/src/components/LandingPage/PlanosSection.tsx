import React from "react";
import Link from "next/link";

const planos = [
  {
    nome: "Free",
    preco: "0 R$",
    descricao: "Plano gratuito para começar a usar nossas funcionalidades básicas.",
    beneficios: [
      "Acesso limitado às funcionalidades",
      "Suporte via e-mail",
      "Até 10 usuários",
    ],
    destaque: false,
  },
  {
    nome: "PRO",
    preco: "299,99 R$",
    descricao: "Plano profissional com acesso completo às funcionalidades avançadas.",
    beneficios: [
      "Acesso total às funcionalidades",
      "Suporte prioritário",
      "Usuários ilimitados",
      "Relatórios detalhados",
    ],
    destaque: true,
  },
  {
    nome: "Empresarial",
    preco: "A partir de 1299,90 R$",
    descricao: "Plano empresarial personalizado para atender às necessidades do seu negócio.",
    beneficios: [
      "Soluções personalizadas",
      "Gerenciamento dedicado",
      "Integração com sistemas existentes",
      "Treinamento e suporte completo",
    ],
    destaque: false,
  },
];

const PlanosSection = () => {
  return (
    <section id="planos" className="py-24 bg-gray-100 dark:bg-boxdark">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-black dark:text-white">
          Nossos Planos
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`w-full md:w-1/3 px-6 ${
                plano.destaque ? "scale-105" : ""
              }`}
            >
              <div className="bg-white dark:bg-boxdark rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-medium mb-4 text-black dark:text-white">
                  {plano.nome}
                </h3>
                <p className="text-3xl font-bold mb-4 text-primary">
                  {plano.preco}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {plano.descricao}
                </p>
                <ul className="text-left mb-6">
                  {plano.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.586l6.879-6.879a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {beneficio}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`inline-block w-full text-center px-6 py-3 rounded-md font-semibold transition ${
                    plano.destaque
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {plano.destaque ? "Escolher PRO" : "Comece Agora"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;