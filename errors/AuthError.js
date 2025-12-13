class AuthError extends Error {
  constructor(message = "Authentication required") {
    super(message);
    this.statusCode = 401;
    this.code = "AUTH_ERROR";
  }
}

module.exports = AuthError;
