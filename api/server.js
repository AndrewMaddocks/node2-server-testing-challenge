const express = require("express");

const dogsRouter = require("../dogs/dogsRouter");

const server = express();

server.use(express.json());

server.use("/api", dogsRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;

// const express = require("express");

// const Dogs = require("../dogs/dogsModel.js");

// const server = express();

// server.use(express.json());

// server.get("/", (req, res) => {
//   res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
// });

// server.get("/dogs", (req, res) => {
//   Dogs.getAll()
//     .then(dogs => {
//       res.status(200).json(dogs);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

// module.exports = server;
