"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

const TableUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users"); // Endpoint da sua API
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Lista de Usuários
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Avatar</h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Nome</h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Email</h5>
          </div>
          <div className="hidden p-2.5 xl:p-5 sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Função</h5>
          </div>
          <div className="hidden p-2.5 xl:p-5 sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Ações</h5>
          </div>
        </div>

        {users.map((user) => (
          <div
            className="grid grid-cols-5 sm:grid-cols-6 border-b border-stroke dark:border-strokedark"
            key={user.id}
          >
            <div className="flex items-center p-2.5 xl:p-5">
              <Image 
                src={user.avatar} 
                alt="Avatar" 
                width={40} 
                height={40} 
                className="rounded-full" 
              />
            </div>
            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.name}</p>
            </div>
            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.email}</p>
            </div>
            <div className="hidden flex items-center p-2.5 xl:p-5 sm:flex">
              <p className="text-black dark:text-white">{user.role}</p>
            </div>
            <div className="hidden flex items-center p-2.5 xl:p-5 sm:flex">
              <button className="text-blue-500 hover:underline">Editar</button>
              <button className="ml-2 text-red-500 hover:underline">Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableUsers;