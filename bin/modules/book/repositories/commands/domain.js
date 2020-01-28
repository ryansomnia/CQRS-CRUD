
const Query = require('../queries/query');
const Command = require('./command');
const wrapper = require('../../../../helpers/utils/wrapper');
const jwtAuth = require('../../../../auth/jwt_auth_helper');
const commonUtil = require('../../../../helpers/utils/common');
const logger = require('../../../../helpers/utils/logger');
const { NotFoundError, UnauthorizedError, ConflictError } = require('../../../../helpers/error');

const algorithm = 'aes-256-ctr';
const secretKey = 'Dom@in2018';

class Book {

  constructor(db){
    this.command = new Command(db);
    this.query = new Query(db);
  }

  async postDataBook(payload) {
    const ctx = 'domain-book';
    const { title, author, price, date } = payload;
    const book = await this.query.findOneBook({ title });
    if (book.data) {
      return wrapper.error(new ConflictError('book already exist'));
    }
    const { result } = await this.command.insertOneBook(payload);
    return wrapper.data(result);

  }
  async putDataBook(id,payload) {
    const {title, author, price, date} = payload;
    const idBook = await this.query.findOneBook({ id });
    if (idBook.err) {
      return wrapper.error(new ConflictError('book not found'));

    }
    const data = {
      title,
      author,
      price,
      date
    };

    const { data:result } = await this.command.updateOneBook(data);
    return wrapper.data(result);

  }

  // async register(payload) {
  //   const { username, password, isActive } = payload;
  //   const user = await this.query.findOneUser({ username });

  //   if (user.data) {
  //     return wrapper.error(new ConflictError('user already exist'));
  //   }

  //   // const chiperPwd = await commonUtil.encrypt(password, algorithm, secretKey);
  //   // const data = {
  //   //   username,
  //   //   password: chiperPwd,
  //   //   isActive
  //   // };

  //   const { data:result } = await this.command.insertOneUser(data);
  //   return wrapper.data(result);

  // }

}



module.exports = Book;
