"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/logo/logo-dark.svg" alt="Logo" width={102} height={52} />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="#sobre" className="text-gray-700 hover:text-primary transition">
            Sobre
          </Link>
          <Link href="#funcionalidades" className="text-gray-700 hover:text-primary transition">
            Funcionalidades
          </Link>
          <Link href="#planos" className="text-gray-700 hover:text-primary transition">
            Planos
          </Link>
          <Link href="#depoimentos" className="text-gray-700 hover:text-primary transition">
            Depoimentos
          </Link>
          <Link href="#suporte" className="text-gray-700 hover:text-primary transition">
            Suporte
          </Link>
          <Link href="#clientes" className="text-gray-700 hover:text-primary transition">
            Clientes
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <Link href="/signup" className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-dark transition">
            Comece Agora
          </Link>
        </div>
        
        {/* Botão para mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuAberto(!menuAberto)} 
            className="text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Menu de Navegação"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuAberto ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <nav className="md:hidden bg-white shadow-md">
          <Link href="#sobre" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Sobre
          </Link>
          <Link href="#funcionalidades" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Funcionalidades
          </Link>
          <Link href="#planos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Planos
          </Link>
          <Link href="#depoimentos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Depoimentos
          </Link>
          <Link href="#suporte" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Suporte
          </Link>
          <Link href="#clientes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Clientes
          </Link>
          <Link href="/signup" className="block px-4 py-2 text-white bg-primary text-center hover:bg-primary-dark">
            Comece Agora
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header; 