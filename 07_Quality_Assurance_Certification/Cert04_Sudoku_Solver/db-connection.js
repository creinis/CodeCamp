//db-connection.js
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Carrega as variáveis de ambiente do arquivo .env para process.env
dotenv.config();

const uri = process.env.DB;
const db = mongoose.connect(uri);

// Verifica a conexão
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "Erro de conexão DB:"));
connection.once("open", () => {
    console.log("O aplicativo está conectado ao DB.");
});

module.exports = db;
