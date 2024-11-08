import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactData {
  nome: string;
  email: string;
  mensagem: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { nome, email, mensagem } = req.body as ContactData;

    // Implementar lógica de envio, como integração com um serviço de email
    console.log('Dados do contato:', { nome, email, mensagem });

    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
} 