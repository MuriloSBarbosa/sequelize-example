import dataBase from "../config/DataBase.mjs";
import sequelize from "sequelize";

const Produto = dataBase.define("produto", {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: sequelize.DOUBLE,
        allowNull: false
    },
    categoria: {
        type: sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

await Produto.sync();

export default Produto;