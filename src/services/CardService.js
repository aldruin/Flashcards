const { Cards} = require('../models');
const conversorHelper = require('../utils/conversorHelper.js');
const {validateCardDTO} = require('../utils/cardsValidator.js');

class CardService{
  constructor(){};

  async createCard(cardDTO){
    try{
      console.log(cardDTO);
      validateCardDTO(cardDTO);

      const existingCard = await Cards.findOne({ where: { nome: cardDTO.nome } });
        if (existingCard) {
          throw new Error('Já existe um card com esse nome.');
        }

      const novoCard = await Cards.create({
        nome: cardDTO.nome,
        pergunta: cardDTO.pergunta,
        resposta: cardDTO.resposta,
      });

      return novoCard;
    } catch(error){
      console.error(error);
      throw new Error('Erro ao criar o card: ' + error.message);
    }
  }

  async getAllCards(){
    try {
      const existingCards = await Cards.findAll();

      return existingCards;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao buscar os cards ' + error.message);
    }
  }

  async getCardById(id){
    try {
      const idToNumber = conversorHelper({ id }).id;
      const card = await Cards.findByPk(idToNumber);

      return card;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao buscar o card ' + error.message);
    }
  }

  async updateCardById(id, cardDTO){
    try {
      const idToNumber = conversorHelper({ id }).id;
      cardDTO.id = idToNumber;

      if (cardDTO.ativo !== undefined){
        cardDTO.ativo = cardDTO.ativo.trim().toLowerCase();
      }

      console.log(cardDTO);
      validateCardDTO(cardDTO, true);


      const card = await Cards.findByPk(idToNumber);
      if (!card) {
        throw new Error('Card não encontrado');
      }

      if (cardDTO.nome !== undefined) {
        card.nome = cardDTO.nome;
      }
      if (cardDTO.pergunta !== undefined) {
        card.pergunta = cardDTO.pergunta;
      }
      if (cardDTO.resposta !== undefined) {
        card.resposta = cardDTO.resposta;
      }
      if (cardDTO.ativo !== undefined) {
        card.ativo = cardDTO.ativo;
      }
  
      await card.save();
  
      return card;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao atualizar o card ' + error.message);
    }
  }

  async deleteCardById(id){
    try {
      const idToNumber = conversorHelper({ id }).id;
      const card = await Cards.findByPk(idToNumber);
      
      if (!card){
        throw new Error('Card não encontrado');
      }

      await card.destroy();

      return { message: 'Card deletado com sucesso' };
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao buscar o card ' + error.message);
    }
  }
}

module.exports = new CardService();