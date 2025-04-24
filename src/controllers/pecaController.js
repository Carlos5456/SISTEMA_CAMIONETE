const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.listar = async (req, res) => {
  const pecas = await prisma.peca.findMany();
  res.json(pecas);
};

exports.criar = async (req, res) => {
  const { nome, descricao, quantidade } = req.body;
  const nova = await prisma.peca.create({
    data: { nome, descricao, quantidade }
  });
  res.status(201).json(nova);
};

exports.atualizar = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, quantidade } = req.body;
  const atualizada = await prisma.peca.update({
    where: { id: parseInt(id) },
    data: { nome, descricao, quantidade }
  });
  res.json(atualizada);
};

exports.deletar = async (req, res) => {
  const { id } = req.params;
  await prisma.peca.delete({
    where: { id: parseInt(id) }
  });
  res.status(204).send();
};
