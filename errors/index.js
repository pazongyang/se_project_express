const AuthError = require("./AuthError");
const BadRequestError = require("./BadRequestError");
const ForbiddenError = require("./ForbiddenError");
const NotFoundError = require("./NotFoundError");
const ConflictError = require("./ConflictError");
const ServerError = require("./ServerError");

module.exports = {
  AuthError,
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  ServerError,
};
