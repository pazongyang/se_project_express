class ServerError extends Error {
  constructor(message = "Internal server error") {
    super(message);
    this.statusCode = 500;
    this.code = "SERVER_ERROR";
  }
}

module.exports = ServerError;
