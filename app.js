// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const mainRouter = require("./routes/index");

// const app = express();
// const { PORT = 3001 } = process.env;

// mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db").catch(console.error);

// app.use(express.json());
// app.use(cors());

// // Temporary auth bypass (commented for now since auth is in routes)
// // app.use((req, res, next) => {
// //   req.user = {
// //     _id: "68df1a1caef3cf37fff9365c",
// //   };
// //   next();
// // });

// app.use("/", mainRouter);

// app.listen(PORT);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");
const { SERVER_ERROR } = require("./utils/errors");

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db").catch(() => {});

app.use(express.json());
app.use(cors());

app.use((req, _res, _next) => {
  req.user = { _id: "68df1a1caef3cf37fff9365c" };
  _next();
});

app.use("/", mainRouter);

app.use((_err, _req, res, _next) => {
  res
    .status(SERVER_ERROR)
    .json({ message: "An error has occurred on the server" });
});

app.listen(PORT);

module.exports = app;
