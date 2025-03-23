'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

await queryInterface.bulkInsert('cards', [
  {
    nome: 'Card 1',
    pergunta: 'Qual é a capital da França?',
    resposta: 'Paris',
    ativo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Card 2',
    pergunta: 'Quantos estados tem o Brasil?',
    resposta: '26 estados e 1 distrito federal',
    ativo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Card 3',
    pergunta: 'Quem foi Albert Einstein?',
    resposta: 'Físico teórico que desenvolveu a teoria da relatividade.',
    ativo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Card 4',
    pergunta: 'O que é Node.js?',
    resposta: 'Uma plataforma JavaScript para construção de aplicações back-end.',
    ativo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Card 5',
    pergunta: 'O que é o Sequelize?',
    resposta: 'Uma biblioteca ORM para Node.js que facilita a interação com bancos de dados SQL.',
    ativo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Card 6',
    pergunta: 'Qual é a fórmula da água?',
    resposta: 'H2O',
    ativo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Card 7',
    pergunta: 'O que é o React?',
    resposta: 'Uma biblioteca JavaScript para construir interfaces de usuário.',
    ativo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Card 8',
    pergunta: 'Quem escreveu "Dom Casmurro"?',
    resposta: 'Machado de Assis',
    ativo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Card 9',
    pergunta: 'O que é um algoritmo?',
    resposta: 'Conjunto de instruções para resolver um problema ou realizar uma tarefa.',
    ativo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Card 10',
    pergunta: 'Qual é o maior planeta do sistema solar?',
    resposta: 'Júpiter',
    ativo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
], {});
},


  async down (queryInterface, Sequelize) {

await queryInterface.bulkDelete('cards', null, {});

  }
};
