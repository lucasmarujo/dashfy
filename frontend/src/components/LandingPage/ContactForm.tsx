import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="nome"
        placeholder="Seu Nome"
        value={formData.nome}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
      />
      <input
        type="email"
        name="email"
        placeholder="Seu Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
      />
      <textarea
        name="mensagem"
        placeholder="Sua Mensagem"
        value={formData.mensagem}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        rows={5}
      ></textarea>
      <button
        type="submit"
        className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm; 