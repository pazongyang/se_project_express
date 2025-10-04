const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const SERVER_ERROR = 500;
const OK = 200;
const CREATED = 201;

const ERROR_MESSAGES = {
  SERVER_ERROR: "An error has occurred on the server.",
  NOT_FOUND: "The requested resource was not found.",
  BAD_REQUEST: "Invalid request data.",
};

module.exports = {
  BAD_REQUEST,
  NOT_FOUND,
  SERVER_ERROR,
  OK,
  CREATED,
  ERROR_MESSAGES,
};
