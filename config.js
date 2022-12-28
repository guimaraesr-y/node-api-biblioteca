const Livro = require('./model/livro');
const Locacao = require('./model/locacao');
const db = require('./connection');
const livro = new Livro(), locacao = new Locacao();

function criarTriggers() {
    let sql1 = `CREATE TRIGGER if NOT exists CalculaAtrasoUPDATE BEFORE UPDATE ON 
        locacoes FOR EACH ROW SET NEW.diasAtraso = IFNULL(NEW.diasAtraso, 
        DATEDIFF(CURDATE(), NEW.dataDevolucao));`;

    let sql2 = `CREATE TRIGGER IF NOT EXISTS CalculaDevolucaoINSERT BEFORE UPDATE ON 
        locacoes FOR EACH ROW SET NEW.dataDevolucao = IFNULL(
            NEW.dataDevolucao,date_add(NEW.dataLocacao, interval 7 DAY)
        ),NEW.diasAtraso = IFNULL(NEW.diasAtraso, DATEDIFF(CURDATE(), NEW.dataDevolucao));`;

    let all = Promise.all([
        new Promise((resolve, reject) => {
            db.getConnection().query(sql1, (err, data) => {
                if(err) reject('[-] Erro ao inicializar CalculaAtrasoUPDATE.\n\n'+err);
                resolve('[+] Trigger CalculaAtrasoUPDATE inicializado com sucesso!');
            })
        }),
        new Promise((resolve, reject) => {
            db.getConnection().query(sql2, (err, data) => {
                if(err) reject('[-] Erro ao inicializar CalculaDevolucaoINSERT.\n\n'+err);
                resolve('[+] Trigger CalculaDevolucaoINSERT inicializado com sucesso!');
            })
        })
    ])

    all.then(res => res.forEach(r => console.log(r)));
    all.catch(err => {
        console.error(err)
        process.exit(1);  
    });
}

function inicializarTabelas() {
    let all = Promise.all([
        livro.criarTabela(),
        locacao.criarTabela()
    ]);

    all.then(res => res.forEach(r => console.log(r)));
    all.catch(err => {
        console.error(err)
        process.exit(1);  
    });
}

module.exports = () => {
    inicializarTabelas();
    criarTriggers();
}