<h1 align="center">
  :books: ESTUDO DE FILA E REGISTRO
</h1>

## Tecnologias

- [Docker Compose](https://github.com/docker/compose) — Compose is a tool for defining and running multi-container Docker applications.
- [Express](https://github.com/expressjs/express) — A web framework for Node.js
- [Bull](https://github.com/OptimalBits/bull) — Premium Queue package for handling distributed jobs
- [Knex.js](https://github.com/tgriesser/knex) — A SQL query builder that is flexible, portable, and fun to use!
- [Multer](https://github.com/expressjs/multer) — middleware for handling multipart/form-data, which is primarily used for uploading files.
- [CSV-Parser](https://github.com/mafintosh/csv-parser) — Streaming CSV parser that aims for maximum speed.

##  Instalação e execução

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://raw.githubusercontent.com/MatheusFlausino/std-background-jobs/master/insomnia.json)

1. Faça um clone desse repositório e [instale o docker](https://docs.docker.com/install/) ;
2. Copie o arquivo `.env.example` e crie um arquivo `.env` com as credenciais do Redis e do banco;
3. Execute `yarn` para instalar todas as dependências do projeto;
4. Execute `docker-composer up` para subir os Docker de Redis e PostgrSQL;
5. Executando `yarn db:migration` para realizar o migrate do banco de dados;
6. Execute `yarn dev` para iniciar o projeto;
7. Edite o exemplo de CSV [`./example.csv`](example.csv) para realizar a importação;

---
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
