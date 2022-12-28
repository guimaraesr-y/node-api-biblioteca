const Locacao = require('../model/locacao');
const model = new Locacao();

function getLocacoes(req, res) {
    model.getAll()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500);
        res.end();
        console.error(err);
    })
}

function addLocacao(req, res) {
    model.addLocacao(req.body)
    .then(() => {
        res.end();
    })
    .catch(err => {
        res.status(500);
        res.end();
        console.error(err);
    })
}

function buscaLocacao(req, res) {
    model.buscaLocacao(req.params.campo, req.params.valor)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500);
        res.end();
        console.error(err);
    })
}

function atualizaLocacao(req, res) {
    model.atualizaLocacao(req.params.id, req.body)
    .then(() => {
        res.end();
    })
    .catch(err => {
        res.status(500);
        res.end();
        console.error(err);
    })
}

function deletaLocacao(req, res) {
    model.deletaLocacao(req.params.id)
    .then(() => {
        res.end();
    })
    .catch(err => {
        res.status(500);
        res.end();
        console.error(err);
    })
}

module.exports = {
    getLocacoes, addLocacao, buscaLocacao, atualizaLocacao, deletaLocacao
}