import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-primary text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Bem-vindo ao Seu Produto
        </h1>
        <p className="text-xl md:text-3xl mb-10">
          Soluções inovadoras para o seu negócio crescer.
        </p>
        <Link href="/signup" className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition">
          Comece Agora
        </Link>
      </div>
    </section>
  );
};

export default HeroSection; 