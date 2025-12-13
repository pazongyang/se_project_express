class ForbiddenError extends Error {
  constructor(message = "Forbidden") {
    super(message);
    this.statusCode = 403;
    this.code = "FORBIDDEN";
  }
}

module.exports = ForbiddenError;