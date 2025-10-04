const User = require("../models/user");
const {
  BAD_REQUEST,
  NOT_FOUND,
  SERVER_ERROR,
  ERROR_MESSAGES,
} = require("../utils/errors");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    console.error(err);
    res.status(SERVER_ERROR).send({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, avatar } = req.body;

    if (!name) {
      return res.status(BAD_REQUEST).send({ message: "Name is required." });
    }

    const user = await User.create({ name, avatar });
    res.status(201).send(user);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      return res
        .status(BAD_REQUEST)
        .send({ message: ERROR_MESSAGES.BAD_REQUEST });
    }
    res.status(SERVER_ERROR).send({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).orFail();
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    if (err.name === "DocumentNotFoundError") {
      return res.status(NOT_FOUND).send({ message: ERROR_MESSAGES.NOT_FOUND });
    }
    if (err.name === "CastError") {
      return res
        .status(BAD_REQUEST)
        .send({ message: ERROR_MESSAGES.BAD_REQUEST });
    }
    res.status(SERVER_ERROR).send({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

module.exports = { getUsers, createUser, getUser };
