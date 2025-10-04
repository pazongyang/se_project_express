// const express = require("express");
// const mongoose = require("mongoose");
// const mainRouter = require("./routes/index");

// const app = express();
// const { PORT = 3001 } = process.env;

// mongoose
//   .connect("mongodb://127.0.0.1:27017/wtwr_db")
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch(console.error);

// app.use(express.json());

// app.use((req, res, next) => {
//   req.user = {
//     _id: "68df1a1caef3cf37fff9365c",
//   };
//   next();
// });

// app.use("/", mainRouter);

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const itemsRouter = require("./routes/clothingItems");
const { SERVER_ERROR, ERROR_MESSAGES } = require("./utils/errors");

const app = express();

app.use(bodyParser.json());

app.use("/users", usersRouter);
app.use("/items", itemsRouter);

app.use((err, req, res, next) => {
  res.status(SERVER_ERROR).send({ message: ERROR_MESSAGES.SERVER_ERROR });
});

const { PORT = 3000, MONGO_URI = "mongodb://127.0.0.1:27017/mydb" } =
  process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Connected to MongoDB. Server running on port ${PORT}`);
    app.listen(PORT);
  })
  .catch(() => {
    console.error("Failed to connect to MongoDB");
  });

module.exports = app;
