class CardDTO{
  constructor (nome, pergunta, resposta){
    this.nome = nome;
    this.pergunta = pergunta;
    this.resposta = resposta;
  };

  static fromRequest(body) {
    return new CardDTO(body.nome, body.pergunta, body.resposta);
  }

  static fromModel(card){
    return new CardDTO({
      id: card.id,
      nome: card.nome,
      pergunta: card.pergunta,
      resposta: card.resposta,
      ativo: card.ativo,
    });
  }
}

module.exports = CardDTO;