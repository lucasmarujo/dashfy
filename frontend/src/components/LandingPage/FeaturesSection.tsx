import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Atualização de Status e Rastreio de Pedidos Automatizado",
    description: "O agente permite que o cliente consulte o status de seu pedido ou rastreie a entrega com base em informações como número do pedido ou endereço de e-mail. Empresas recebem muitas solicitações relacionadas ao status e rastreamento de pedidos, que são perguntas repetitivas e demoram para serem respondidas manualmente. Com essa funcionalidade, o cliente obtém as informações rapidamente, sem necessidade de interação humana.",
  },
  {
    title: "Assistente de Recomendações de Produtos Baseado em IA",
    description: "O agente pode recomendar produtos com base no histórico de navegação, no carrinho atual ou em preferências passadas do cliente (se aplicável). O recurso melhora a experiência do usuário e aumenta a taxa de conversão ao sugerir produtos relacionados, promovendo vendas adicionais e upsell. Empresas de e-commerce que oferecem recomendações personalizadas costumam ver aumentos em vendas e satisfação do cliente.",
  },
  {
    title: "Captação e Qualificação de Leads para Remarketing",
    description: "O agente pode capturar informações dos clientes que manifestam interesse em produtos, como e-mail e preferências, para remarketing posterior. Pode qualificar leads perguntando sobre o tipo de produto que procuram ou coletando dados sobre o que motivou a visita. Captar leads qualificados ajuda as empresas a criarem campanhas de remarketing direcionadas, aumentando as chances de conversão e permitindo engajamento com clientes que abandonaram o site sem finalizar a compra.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-black dark:text-white">
          Nossas Funcionalidades
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 px-6">
              <div className="bg-white dark:bg-boxdark rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-6">
                  <FaCheckCircle className="text-primary text-4xl" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-black dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 