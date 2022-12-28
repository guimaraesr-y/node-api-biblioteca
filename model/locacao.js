const db = require('../connection');

class Locacao {
    constructor(id=undefined,dataLocacao=undefined,dataDevolucao=undefined,idLivro=undefined,
        nomeLocatario=undefined,cpfLocatario=undefined,diasAtraso=undefined,devolvido=undefined) {

        this.id = id;
        this.dataLocacao = dataLocacao;
        this.dataDevolucao = dataDevolucao;
        this.idLivro = idLivro;
        this.nomeLocatario = nomeLocatario;
        this.cpfLocatario = cpfLocatario;
        this.diasAtraso = diasAtraso;
        this.devolvido = devolvido;
    }

    criarTabela() {
        let params = [];
        let sql = `CREATE TABLE IF NOT EXISTS \`locacoes\` (
            \`id\` INT(10) NOT NULL AUTO_INCREMENT,
            \`dataLocacao\` DATE NOT NULL DEFAULT 'curdate()',
            \`dataDevolucao\` DATE NULL DEFAULT NULL,
            \`idLivro\` INT(10) NOT NULL,
            \`nomeLocatario\` VARCHAR(255) NOT NULL DEFAULT '' COLLATE 'latin1_swedish_ci',
            \`cpfLocatario\` VARCHAR(14) NULL DEFAULT '000.000.000-00' COLLATE 'latin1_swedish_ci',
            \`diasAtraso\` INT(10) NOT NULL DEFAULT '0',
            \`devolvido\` TINYINT(1) NOT NULL DEFAULT '0',
            PRIMARY KEY (\`id\`) USING BTREE,
            INDEX \`idLivro\` (\`idLivro\`) USING BTREE,
            CONSTRAINT \`locacoes_ibfk_1\` FOREIGN KEY (\`idLivro\`) REFERENCES \`restfulbiblioteca\`.\`livros\` (\`id\`) ON UPDATE RESTRICT ON DELETE RESTRICT
        )`;
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err, res) => {
                if(err) reject("[-] Erro ao inicializar tabela `locacoes`.\n\n" + err);
                resolve("[+] Tabela `locacoes` inicializada com sucesso!");
            })
        })
    }

    getAll() {
        let params = [];
        let sql = 'SELECT * FROM locacoes';
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err, data) => {
                if(err) reject(err);
                else resolve(data);
            })
        })
    }

    addLocacao(json) {
        let params = [
            json.dataLocacao, json.dataDevolucao, json.idLivro, json.nomeLocatario, 
            json.cpfLocatario, json.diasAtraso, json.devolvido
        ];
        let sql = `INSERT INTO locacoes 
            (dataLocacao, dataDevolucao, idLivro, nomeLocatario, cpfLocatario, diasAtraso, devolvido)
            VALUES (?,?,?,?,?,?,?)`;
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err) => {
                if(err) reject(err);
                else resolve();
            })
        })
    }

    buscaLocacao(campo, valor) {
        let params = ['%'+valor+'%'];
        let sql = `SELECT * FROM locacoes WHERE ${campo} LIKE ?`;
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err, data) => {
                if(err) reject(err);
                else resolve(data);
            })
        })
    }

    atualizaLocacao(id, json) {
        let params = [
            json.dataLocacao, json.dataDevolucao, json.idLivro, json.nomeLocatario,
            json.cpfLocatario, json.diasAtraso, json.devolvido, id
        ];
        let sql = `UPDATE locacoes SET dataLocacao = ?, dataDevolucao = ?, idLivro = ?, 
            nomeLocatario = ?, cpfLocatario = ?, diasAtraso = ?, devolvido = ? WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err, data) => {
                if(err) reject(err);
                else resolve(data);
            })
        })
    }

    deletaLocacao(id) {
        let params = [id];
        let sql = "DELETE FROM locacoes WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err, data) => {
                if(err) reject(err);
                else resolve(data);
            })
        })
    }

    // todos acima já testados e ok
    // adicionar restrição de locação diária!!!!!
}

module.exports = Locacao;