const express = require("express");
const Dogs = require("./dogsModel.js");
const router = express.Router();

router.get("/dogs", (req, res) => {
  Dogs.getAll()
    .then(dogs => {
      res.status(200).json(dogs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});
router.post("/dogs", (req, res) => {
  const dogData = req.body;

  Dogs.add(dogData)
    .then(dog => {
      res.status(201).json(dog);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create a new dog" });
    });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Dogs.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find dog with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete dog" });
    });
});

module.exports = router;
