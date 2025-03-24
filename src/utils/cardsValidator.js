const Joi = require('joi');

const validateCardDTO = (cardDTO, isUpdate = false) => {
  const schema = Joi.object({
    id: isUpdate ? Joi.number().required() : Joi.forbidden(),
    nome: isUpdate ? Joi.string().min(3).max(255).optional() : Joi.string().min(3).max(255).required().messages({
      'string.base': 'O nome deve ser uma string',
      'string.min': 'O nome deve ter no mínimo 3 caracteres',
      'string.max': 'O nome deve ter no máximo 255 caracteres',
      'any.required': 'O nome é obrigatório',
    }),
    pergunta: isUpdate ? Joi.string().min(3).optional() : Joi.string().min(3).required().messages({
      'string.base': 'A pergunta deve ser uma string',
      'string.min': 'A pergunta deve ter no mínimo 3 caracteres',
      'any.required': 'A pergunta é obrigatória',
    }),
    resposta: isUpdate ? Joi.string().min(3).optional() : Joi.string().min(3).required().messages({
      'string.base': 'A resposta deve ser uma string',
      'string.min': 'A resposta deve ter no mínimo 3 caracteres',
      'any.required': 'A resposta é obrigatória',
    }),
    ativo: isUpdate ? Joi.boolean().optional() : Joi.boolean().default(true),
  });

  const { error } = schema.validate(cardDTO);
  if (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = { validateCardDTO };
