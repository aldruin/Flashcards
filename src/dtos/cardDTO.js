class CardDTO{
  constructor (id, nome, pergunta, resposta, ativo){
    this.id = id;
    this.nome = nome;
    this.pergunta = pergunta;
    this.resposta = resposta;
    this.ativo = ativo;
  };

  static fromRequest(body){
    return new CardDTO({
      nome: body.nome,
      pergunta: body.pergunta,
      resposta: body.resposta
    });
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