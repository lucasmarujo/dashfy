import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Carlos Souza",
    role: "CEO da Empresa X",
    feedback: "Este produto transformou a maneira como gerenciamos nossos negócios. Altamente recomendado!",
    avatar: "/images/user/user-03.png",
  },
  {
    name: "Ana Pereira",
    role: "Gerente de Marketing",
    feedback: "As funcionalidades são incríveis e o suporte é excelente. Estou muito satisfeita!",
    avatar: "/images/user/user-04.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-gray-100 dark:bg-boxdark">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-black dark:text-white">
          Depoimentos
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-6">
              <div className="bg-white dark:bg-boxdark rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-medium text-black dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 