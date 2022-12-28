# Project: RESTful API de Biblioteca
Olá, digníssimo leitor! Obrigado pelo apoio ^_^

Esse sistema descreve o funcionamento de uma biblioteca, onde o único operador do sistema é o administrador, ou seja, não existem usuários no sistema.

Nessa API estão descritas rotas para o funcionamento do programa, as quais estão disponíveis abaixo.

Foi utilizado Node.JS e Express para a construção das rotas.

Na raiz do projeto existe um arquivo `TODO.md`, uma todolist, com algumas alterações e implementações ainda a serem realizadas.

# Instalação

É tão simples quando clonar este repositório

``` bash
git clone https://github.com/guimaraesr-y/node-api-biblioteca.git
```

E então instalar as dependências com npm e, por fim, executar a aplicação

``` bash
npm install && npm run
```

# 📁 Collection: Livros 


## End-point: Criar Livros
### Method: POST
>```
>localhost:8080/api/livros
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "nome":"A Culpa é das Estrelas",
    "dataPubl":"2015-12-11",
    "estoque":9,
    "autor":"Juaum"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Retorna Todos os Livros
### Method: GET
>```
>localhost:8080/api/livros
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Retorna Livro por ID
### Method: GET
>```
>localhost:8080/api/livros/busca/id/2
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Retorna Livro por Nome
### Method: GET
>```
>localhost:8080/api/livros/busca/nome/cidades
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Altera Livro por ID
### Method: PUT
>```
>localhost:8080/api/livros/busca/id/3
>```
### Body (**raw**)

```json
{
    "nome": "A Culpa é das Estrelas",
    "dataPubl": "2019-12-30",
    "estoque": 19,
    "autor": "Juaumzin"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Deleta livro por ID
### Method: DELETE
>```
>localhost:8080/api/livros/busca/id/1
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Locações 


## End-point: Cria Nova Locação
### Method: POST
>```
>localhost:8080/api/locacoes
>```
### Body (**raw**)

```json
{
    "dataLocacao":"2022-10-9",
    "dataDevolucao":null,
    "idLivro":3,
    "nomeLocatario":"ryanzin",
    "cpfLocatario":"",
    "diasAtraso":650,
    "devolvido":1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Retorna Todas as Locações
### Method: GET
>```
>localhost:8080/api/locacoes
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Busca Locações por Campo Especificado
Os campos devem ser especificados na URL, como:

```
localhost:8080/api/locacoes/busca/id/1
localhost:8080/api/locacoes/busca/nomeLocatario/teste

```

E assim segue com os demais campos.
### Method: GET
>```
>localhost:8080/api/locacoes/busca/id/1
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Altera Locação por ID
### Method: PUT
>```
>localhost:8080/api/locacoes/busca/id/8
>```
### Body (**raw**)

```json
{
    "dataLocacao":"2022-10-10",
    "dataDevolucao":"2022-12-20",
    "idLivro":3,
    "nomeLocatario":"Testando Alterar",
    "cpfLocatario":"",
    "diasAtraso":650,
    "devolvido":1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Deleta Locação por ID
### Method: DELETE
>```
>localhost:8080/api/locacoes/busca/id/8
>```
### Body (**raw**)

```json
{
    "dataLocacao":"2022-10-10",
    "dataDevolucao":"2022-12-20",
    "idLivro":3,
    "nomeLocatario":"Testando Alterar",
    "cpfLocatario":"",
    "diasAtraso":650,
    "devolvido":1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Estatística 


## End-point: Retorna Estatísticas Gerais por ID do Livro
Um exemplo de query e retorno:

``` json
// query:
localhost:8080/api/estatistica/3
// resultado:
[
    {
        "id": 3,
        "nome": "A Culpa é das Estrelas",
        "dataPubl": "2019-12-30T03:00:00.000Z",
        "estoque": 19,
        "autor": "Juaumzin",
        "disponiveis": 15,
        "qtdEmprestados": 2,
        "totalEmprestados": 4,
        "qtdAtrasados": 2,
        "atrasados": [
            {
                "cpf": "000.000.000-00",
                "nome": "Teste1"
            },
            {
                "cpf": "000.000.000-00",
                "nome": "Teste123"
            },
            {
                "cpf": "000.000.000-00",
                "nome": "mariazinha"
            },
            {
                "cpf": "",
                "nome": "ryanzin"
            }
        ]
    }
]

```
### Method: GET
>```
>localhost:8080/api/estatistica/3
>```

_________________________________________________

