const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

// module.exports.sequelize = new Sequelize(
//   process.env.DB_NAME, // Cambiado a DB_NAME para coincidir con .env
//   process.env.DB_USER, // Cambiado a DB_USER
//   process.env.DB_PASSWORD, // Cambiado a DB_PASSWORD
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: process.env.DB_DIALECT,
//   }
// );

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

module.exports = sequelize;
