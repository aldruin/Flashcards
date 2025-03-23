const CardDTO = require('../dtos/cardDTO.js');
const CardService = require('../services/CardService.js');

class CardController {
  constructor(){};

  async createCard(req, res){
    const cardDTO = CardDTO.fromRequest(req.body);
    const novoCard = await CardService.createCard(cardDTO);

    return res.status(200).json(novoCard);
  }
}

module.exports = CardController;