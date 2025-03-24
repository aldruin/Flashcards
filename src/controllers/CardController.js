const CardDTO = require('../dtos/cardDTO.js');
const CardService = require('../services/CardService.js');

class CardController {
  constructor(){};

  async createCard(req, res){
    const cardDTO = CardDTO.fromRequest(req.body);
    const novoCard = await CardService.createCard(cardDTO);

    return res.status(201).json(novoCard);
  }

  async getAllCards(req, res){
    const cards = await CardService.getAllCards();

    return res.status(200).json(cards);
  }

  async getCardById(req, res){
    const { id } = req.params;
    const card = await CardService.getCardById(id);

    return res.status(200).json(card);
  }

  async updateCardById(req, res){
    const { id } = req.params;
    const cardDTO = CardDTO.fromRequest(req.body);
    const updatedCard = await CardService.updateCardById(id, cardDTO);

    return res.status(200).json(updatedCard);
  }

  async deleteCardById(req, res){
    const { id } = req.params;
    const card = await CardService.deleteCardById(id);

    return res.status(204).json(card);
  }

}

module.exports = CardController;