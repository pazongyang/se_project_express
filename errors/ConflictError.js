class ConflictError extends Error {
  constructor(message = "Conflict occurred") {
    super(message);
    this.statusCode = 409;
    this.code = "CONFLICT";
  }
}

module.exports = ConflictError;