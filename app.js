const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");
const { SERVER_ERROR, NOT_FOUND } = require("./utils/errors");

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db").catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.use(express.json());
app.use(cors());

app.use("/", mainRouter);

app.use((req, res) => {
  res.status(NOT_FOUND).json({ message: "Requested resource not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(SERVER_ERROR)
    .json({ message: "An error has occurred on the server" });
});

app.listen(PORT);

module.exports = app;
