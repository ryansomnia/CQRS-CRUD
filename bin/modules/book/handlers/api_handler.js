const wrapper = require('../../../helpers/utils/wrapper');
const commandHandler = require('../repositories/commands/command_handler');
const commandModel = require('../repositories/commands/command_model');
const queryHandler = require('../repositories/queries/query_handler');
const validator = require('../utils/validator');
const { ERROR:httpError, SUCCESS:http } = require('../../../helpers/http-status/status_code');



const postDataBook = async (req, res) => {
  const payload = req.body;
  const validatePayload = validator.isValidPayload(payload, commandModel.book);
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    return commandHandler.postDataBook(result.data);
  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Input Book')
      : wrapper.response(res, 'success', result, 'Input Book', http.OK);
  };
  sendResponse(await postRequest(validatePayload));
};



const getDataBook = async (req, res) => {

  const getData = async () => queryHandler.getBook();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Get All Book', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Get All Book', http.OK);
  };
  sendResponse(await getData());
};

const deleteDataBook = async (req, res) => {

  const idBook = req.params.id;
  const getData = async () => queryHandler.deleteDataBook(idBook);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Delete Book', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Delete Book', http.OK);
  };
  sendResponse(await getData());
};

const getByIdBook = async (req, res) => {

  const idBook = req.params.id;
  const getData = async () => queryHandler.getByIdBook(idBook);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Find This Book', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Find This Book', http.OK);
  };
  sendResponse(await getData());
};

const putDataBook = async (req, res) => {
  const {idBook} = req.params;
  const payload = req.body;
  const updateBook = async() => commandHandler.putDataBook(idBook,payload)
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Edit Book')
      : wrapper.response(res, 'success', result, 'Edit Book', http.OK);
  };
  sendResponse(await updateBook());
};

module.exports = {
  postDataBook,
  getDataBook,
  deleteDataBook,
  getByIdBook,
  putDataBook
};