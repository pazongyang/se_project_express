const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { errors } = require("celebrate");
const mainRouter = require("./routes/index");
const { NotFoundError } = require("./errors");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

app.use(express.json());
app.use(cors());

app.use(requestLogger);

app.use("/", mainRouter);

// 404 handler
app.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

// Celebrate errors handler
app.use(errors());

app.use(errorLogger);

// Centralized error handler
app.use((err, req, res, next) => {
  const {
    statusCode = 500,
    message = "An error has occurred on the server",
    code = "SERVER_ERROR",
  } = err;

  res.status(statusCode).json({ code, message });
});

app.listen(PORT);

module.exports = app;
