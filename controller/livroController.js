const Livro = require('../model/livro');
const model = new Livro();

function getLivros(req, res) {
    model.getAll()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500);
        res.end();
    })
}

function addLivro(req, res) {
    model.addLivro(req.body).then(() => {
        res.status(200);
        res.end();
    })
    .catch(err => {
        console.error(err);
        res.status(500);
        res.end();
    })
}

function updateLivro(req, res) {
    model.updateLivro(req.params.id, req.body)
    .then(() => {
        res.end();
    })
    .catch(err => {
        console.error(err)
        res.status(500);
        res.end();
    })
}

function deleteLivro(req, res) {
    model.deleteLivro(req.params.id)
    .then(() => {
        res.end();
    })
    .catch(err => {
        console.error(err);
        res.status(500);
        res.end();
    })
}

function buscaLivro(req, res) {
    if(req.params.campo == 'id') {
        model.getById(req.params.valor)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500);
            res.end();
        })
    } else if (req.params.campo == 'nome') {
        model.getByName(req.params.valor)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.error(err)
            res.status(500);
            res.end();
        })
    } else {
        res.status(400);
        res.end();
    }
}

module.exports = {
    getLivros, buscaLivro, addLivro, updateLivro, deleteLivro
}