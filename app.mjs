import express from "express";
import { config } from "dotenv";
import produtoRoute from "./routes/produtoRoute.mjs";

config();

const app = express();

app.use(express.json());

app.use("/produto", produtoRoute);

const { PORTA } = process.env;

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`)
});