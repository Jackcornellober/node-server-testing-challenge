const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(fruit) {
  return db('fruits').insert(fruit, 'id');
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
  return db('fruits')
}

function getAll() {
  return db('fruits');
}

function findById(id) {
  return null;
}
