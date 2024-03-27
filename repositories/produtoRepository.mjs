import Produto from "../models/Produto.mjs";

export function listarProdutos() {
    return Produto.findAll();
}

export function cadastrarProduto(nome, preco, categoria) {
    return Produto.create({
        nome,
        preco,
        categoria
    });
}