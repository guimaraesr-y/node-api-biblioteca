const Estatistica = require('../model/estatistica');
const model = new Estatistica();

function estatisticaHandle(req, res) {
    model.estatisticaLivro(req.params.idLivro)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500);
        res.end();
        console.error(err);
    })
}

module.exports = {
    estatisticaHandle
}