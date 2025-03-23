const CardDTO = require('../dtos/cardDTO.js');
const CardService = require('../services/CardService.js');

class CardController {
  constructor(){};

  async createCard(req, res){
    const cardDTO = CardDto.fromRequest(req.body);
    const novoCard = await this.CardService.createCard(cardDTO);

    return res.status(200).json(novoCard);
  }
}