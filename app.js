const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const { SERVER_ERROR } = require("./utils/errors");

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db").catch((err) => {
  console.error("DB connection error:", err);
  process.exit(1);
});

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "68df1a1caef3cf37fff9365c",
  };
  next();
});

app.use("/", mainRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(SERVER_ERROR)
    .send({ message: "An error has occurred on the server." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
