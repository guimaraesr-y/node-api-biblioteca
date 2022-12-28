const db = require('../connection');

class Livro {
    constructor(id=null,nome=null,dataPubl=null,estoque=null,autor=null) {
        this.id = id;
        this.nome = nome;
        this.dataPubl = dataPubl;
        this.estoque = estoque;
        this.autor = autor;
    }

    criarTabela() {
        let params = [];
        let sql = `CREATE TABLE IF NOT EXISTS \`livros\` (
            \`id\` INT(10) NOT NULL AUTO_INCREMENT,
            \`nome\` VARCHAR(255) NOT NULL DEFAULT '' COLLATE 'latin1_swedish_ci',
            \`dataPubl\` DATE NOT NULL DEFAULT 'curdate()',
            \`estoque\` INT(10) NOT NULL DEFAULT '1',
            \`autor\` VARCHAR(255) NOT NULL DEFAULT '' COLLATE 'latin1_swedish_ci',
            PRIMARY KEY (\`id\`)
        )`;
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err, data) => {
                if(err) reject("[-] Erro ao inicializar tabela `livros`.\n\n" + err);
                resolve("[+] Tabela `livros` inicializada com sucesso!");
            })
        })
    }

    getById(id) {
        let params = [id];
        let sql = "SELECT * FROM livros WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err, res) => {
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    getByName(nome) {
        let params = ['%'+nome+'%'];
        let sql = "SELECT * FROM livros WHERE nome LIKE ?";
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err, res) => {
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    getAll() {
        return new Promise((resolve, reject) => {
            db.getConnection().query('SELECT * FROM livros', (err, res) => {
                if(err) reject(err);
                resolve(res);
            })
        })
    }
    
    addLivro(json) {
        let params = [json.nome, json.dataPubl, json.estoque, json.autor];
        let sql = "INSERT INTO livros (nome, dataPubl, estoque, autor) VALUES (?,?,?,?)";
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err) => {
                if(err) reject(err);
                else resolve();
            })
        })
    }
    
    updateLivro(id, json) {
        let params = [json.nome, json.dataPubl, json.estoque, json.autor, id];
        let sql = "UPDATE livros SET nome = ?, dataPubl = ?, estoque = ?, autor = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err) => {
                if(err) reject(err);
                else resolve();
            })
        })
    }
    
    deleteLivro(id) {
        let params = [id];
        let sql = "DELETE FROM livros WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.getConnection().query(sql, params, (err) => {
                if(err) reject(err);
                else resolve();
            })
        })
    }

}

module.exports = Livro;