const { Cards} = require('../models');
const {validateCardDTO} = require('../utils/cardsValidator.js');

class CardService{
  constructor(){};

  async createCard(cardDTO){
    try{
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


}

module.exports = new CardService();