const Book = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));
const book = new Book(db);

const getBook = async () => {
  const getData = async () => {
    console.log('salah disini kayanya')
    const result = await book.viewBook();
    return result;
  };
  const result = await getData();
  return result;
};

const deleteDataBook =  async (id) => {
  const getData = async () => {
    const result = await book.deleteDataBook(id);
    return result;
  };
  const result = await getData();
  return result;
};

const getByIdBook =  async (id) => {
  const getData = async () => {
    const result = await book.getByIdBook(id);
    return result;
  };
  const result = await getData();
  return result;
};

module.exports = {
  getBook,
  deleteDataBook,
  getByIdBook
};
