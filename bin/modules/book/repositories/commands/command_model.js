const joi = require('joi');

const book = joi.object({
  title: joi.string().required(),
  author: joi.string().required(),
  price: joi.number().required(),
  date: joi.date().required()
});


module.exports = {
  book
};
