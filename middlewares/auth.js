const jwt = require("jsonwebtoken");
const { BAD_REQUEST } = require("../utils/errors");

const { JWT_SECRET = "your-secret-key" } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(BAD_REQUEST).send({ message: "Authorization required" });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload; // attach user _id to request
    next();
  } catch (err) {
    return res.status(BAD_REQUEST).send({ message: "Invalid token" });
  }
};