const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Book {

  constructor(db){
    this.query = new Query(db);
  }

  async viewBook() {
    const book = await this.query.findMany();
    if (book.err) {
      return wrapper.error(new NotFoundError('Cant not find book'));
    }
    const { data } = book;
    return wrapper.data(data);
  }
  async getByIdBook(id) {

    const bookId = await this.query.findById(id);
    if (bookId.err) {
      return wrapper.error(new NotFoundError('Cant not find book'));
    }
    const book = await this.query.findById(id);
    const { data } = book;
    return wrapper.data(data);
  }
  
  async deleteDataBook(id) {

    const bookId = await this.query.findById(id);
    if (bookId.err) {
      return wrapper.error(new NotFoundError('Cant not find book'));
    }
    const book = await this.query.deleteOne(id);
    const { data } = book;
    return wrapper.data(data);
  }
}

module.exports = Book;
