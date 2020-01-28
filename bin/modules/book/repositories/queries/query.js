
const ObjectId = require('mongodb').ObjectId;

class Query {

  constructor(db) {
    this.db = db;
  }

  async findMany(parameter) {
    this.db.setCollection('book');
    const recordset = await this.db.findMany(parameter);
    return recordset;
  }
  async findOneBook(parameter) {
    this.db.setCollection('book');
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findById(id) {
    this.db.setCollection('book');
    const parameter = {
      _id: ObjectId(id)
    };
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findByTitle(title){
    this.db.setCollection('book');
    const parameter = {
      title: title
    };
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }
  async deleteOne(id){
    this.db.setCollection('book');
    const parameter = {
      _id: ObjectId(id)
    };
    const recordset = await this.db.deleteOne(parameter);
    return recordset;
  }



}

module.exports = Query;
