import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

const users: User[] = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@example.com",
    role: "Administrador",
    avatar: "/images/user/user-01.png",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    role: "Editor",
    avatar: "/images/user/user-02.png",
  },
  // Adicione mais usuários conforme necessário
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  res.status(200).json(users);
} 