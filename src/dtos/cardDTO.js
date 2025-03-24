class CardDTO{
  constructor(id, nome, pergunta, resposta, ativo) {
    this.id = id;
    this.nome = nome;
    this.pergunta = pergunta;
    this.resposta = resposta;
    this.ativo = ativo;
  }

  static fromRequest(body) {
    return new CardDTO(
      body.id ? Number(body.id) : undefined,
      body.nome,
      body.pergunta,
      body.resposta,
      body.ativo
    );
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