const express = require('express');
const router = express.Router();

// controllers
const livroController = require('./controller/livroController');
const locacaoController = require('./controller/locacaoController');
const estatisticaController = require('./controller/estatisticaController');


// busca todos os livros ou cria um novo
router.route('/livros')
.get((req, res) => { // busca todos os livros
    livroController.getLivros(req, res);
})
.post((req, res) => { // cria novo livro
    livroController.addLivro(req, res);
})

// busca livros por id ou nome
router.get('/livros/busca/:campo/:valor', (req, res) => {
    livroController.buscaLivro(req, res);
})

// atualiza e deleta livro por id
router.route('/livros/busca/id/:id')
.put((req, res) => { // atualiza livro por id
    livroController.updateLivro(req, res);
})
.delete((req, res) => { // deletra livro por id
    livroController.deleteLivro(req, res);
})


/* ################################################## */


router.route('/locacoes')
.get((req, res) => { // retorna todas as locações
    locacaoController.getLocacoes(req, res); 
})
.post((req, res) => { // cria nova locação
    locacaoController.addLocacao(req, res);
})

//busca locação por id, dataLocacao, idLivro, nomeLocatario, devolvido
router.get('/locacoes/busca/:campo/:valor', (req, res) => {
    locacaoController.buscaLocacao(req, res);
})

// atualiza e deleta locação por id
router.route('/locacoes/busca/id/:id')
.put((req, res) => { // atualiza livro por id
    locacaoController.atualizaLocacao(req, res);
})
.delete((req, res) => { // deletra locação por id
    locacaoController.deletaLocacao(req, res);
})





// estatísticas 
router.get('/estatistica/:idLivro', (req, res) => {
    estatisticaController.estatisticaHandle(req, res); // alterar modo no controller amanhã
})

module.exports = router;