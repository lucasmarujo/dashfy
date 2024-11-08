import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Pronto para começar?
        </h2>
        <p className="text-xl mb-10">
          Junte-se a nós e transforme seu negócio com nossas soluções.
        </p>
        <Link href="/signup" className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition">
          Comece Agora
        </Link>
      </div>
    </section>
  );
};

export default CTASection; 