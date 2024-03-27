import * as produtoRepository from '../repositories/produtoRepository.mjs';

export function listarProdutos(req, res) {
    produtoRepository.listarProdutos()
        .then((produto) => {
            res.send(produto);
        })
        .catch((error) => {
            console.log(`Erro ao listar produtos: ${error}`);
        });
}

export function cadastrarProduto(req, res) {
    
}