import express from "express";
import * as produtoController from "../controllers/produtoController.mjs";

const produtoRoute = express.Router();

produtoRoute.get("/", (req, res) => {
    produtoController.listarProdutos(req, res);
});

produtoRoute.post("/", (req, res) => {
    produtoController.cadastrarProduto(req, res);
});


produtoRoute.post("/", (req, res) => {
    produtoController.cadastrarProduto(req, res);
});

export default produtoRoute;