const db = require('../connection');

class Estatistica {
    constructor() {
        this.idLivro = undefined;
        this.nomeLivro = undefined;
        this.dataPubl = undefined;
        this.estoque = undefined;
        this.autor = undefined;
        this.disponiveis = undefined;
        this.qtdEmprestados = undefined;
        this.totalVezesEmprestado = undefined;
        this.qtdAtrasados = undefined;
        this.atrasadosInfo = undefined;
    }

    estatisticaLivro(id) {
        let params = [id];
        let sql = `SELECT livros.id, livros.nome, livros.dataPubl, livros.estoque, 
        livros.autor, livros.estoque-COUNT(*) AS disponiveis, 
        COUNT(case locacoes.devolvido when 0 then 1 ELSE NULL END) AS qtdEmprestados,
        COUNT(*) AS totalEmprestados, COUNT(case when locacoes.diasAtraso>0 AND 
        locacoes.devolvido=0 then 1 ELSE NULL END) AS qtdAtrasados,
        JSON_ARRAYAGG(JSON_OBJECT("nome", locacoes.nomeLocatario, "cpf", locacoes.cpfLocatario)) 
        AS atrasados FROM livros INNER JOIN locacoes ON livros.id = locacoes.idLivro 
        WHERE livros.id = ?`;
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err, data) => {
                if(err) reject(err);
                data[0]['atrasados'] = JSON.parse(data[0]['atrasados']);
                resolve(data);
            })
        })
    }
}

module.exports = Estatistica;