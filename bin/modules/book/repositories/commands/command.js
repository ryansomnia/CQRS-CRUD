
class Command {

  constructor(db) {
    this.db = db;
  }

  async insertOneBook(document){
    this.db.setCollection('book');
    const result = await this.db.insertOne(document);
    return result;
  }

  async updateOneBook(document){
    this.db.setCollection('book');
    const result = await this.db.upsertOne(document);
    return result;
  }
}
module.exports = Command;
