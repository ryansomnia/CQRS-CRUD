const Book = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));

const postDataBook = async (payload) => {
  const book = new Book(db);
  const postCommand = async payload => book.postDataBook(payload);
  return postCommand(payload);
};

const putDataBook = async (idBook, payload) => {
  const book = new Book(db);
  const postData = async () => {
    const result = await book.putDataBook(idBook, payload);
    return result;
  };
  const result = await postData();
  return result;
};
//   const book = new Book(db);
//   const putCommand = async payload => book.putDataBook(payload);
//   return putCommand(payload);

// };

module.exports = {
  postDataBook,
  putDataBook
};
