import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-100 dark:bg-boxdark">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <Image
            src="/images/about-us.png"
            alt="Sobre Nós"
            width={500}
            height={400}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-semibold mb-6 text-black dark:text-white">
            Sobre Nós
          </h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Somos uma empresa focada em fornecer as melhores soluções tecnológicas para impulsionar o crescimento do seu negócio. Com uma equipe dedicada e experiente, entregamos resultados de alta qualidade.
          </p>
          <Link href="/about" className="inline-block text-primary font-medium hover:underline text-lg">
            Saiba Mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 