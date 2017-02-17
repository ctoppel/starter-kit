const Sequelize = require('sequelize');

const connection = new Sequelize('postgres://[username]:[password]@[url]:5432/[database]'); // insert premade 'URL' from elephantSQL

module.exports = connection;
