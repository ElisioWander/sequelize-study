require('dotenv').config()

// configurando o banco de dados
module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  database: "curso_sequelize",
  define: {
    timestamps: true
  }
}