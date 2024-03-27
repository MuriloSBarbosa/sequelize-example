import sequelize from "sequelize";
import { config } from "dotenv";
config();

const { NAME_DB, USER_DB, PASSWORD_DB, PORT_DB } = process.env;

// ordem: nome do banco, usuario, 
// senha, json de configuração (host = localhost, dialect = linguagem do banco,
// porta);

const dataBase = new sequelize(NAME_DB, USER_DB, PASSWORD_DB, {
    host: "localhost",
    dialect: "mysql",
    port: PORT_DB
});


dataBase.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso!");
    })
    .catch((error) => {
        console.log(`Erro ao conectar com o banco de dados: ${error}`);
    });

export default dataBase;