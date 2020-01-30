const db = require("../data/dbConfig.js");

module.exports = {
  add,

  remove,
  getAll,
  findById
};

function remove(id) {
  return db("dogs")
    .where("id", id)
    .del();
}

function getAll() {
  return db("dogs");
}

function findById(id) {
  return db("dogs")
    .where({ id })
    .first();
}

function add(dog) {
  return db("dogs")
    .insert(dog, "id")
    .then(ids => {
      const [id] = ids;

      return findById(id);
    });
}
