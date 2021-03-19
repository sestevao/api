
**Next Level Week 04**

## 🔖 Sobre

O <strong>NPS-API</strong> é uma API Restful para Net Promoter Score.

Aplicação construída na trilha <strong>NodeJS</strong> da <strong>Next Level Week #04</strong> da [Rocketseat](https://rocketseat.com.br/).


## 🔗 Links do projeto

### Notion
- [Ambiente](https://www.notion.so/Configura-es-do-ambiente-Node-js-ae9fea3f78894139af4268d198294e2a)

### Resources
- [Ícones e Wallpapers](https://drive.google.com/drive/folders/11fxy_LmTD6S1FGTQbeu47QPLzvyuEGSs)


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)


## 🚀 Módulos

- [typeorm] - ORM baseado em entidades
- [express] - Framework para servidor
- [uuid] - gerador de ids únicos, como estamos usando uma ORM, pode ser que algum banco não comporte o autoincrement.
- [@types/express] - Permite visualizar métodos de henrança do express no modelo de typescript
- [jest] - utilizado para realizar os testes
- [@types/jest] - utilizado para setar a tipagem do pacote jest, recomendado para ambiente de dev
- [supertest] - utilizado para simular fetchs, é utilizado junto com o jest
- [@types/supertest]
- [nodemailer] - utilizado para enviar email e tem um método de test que gera um link para visualizar como o email ira ficar
- [handlebars] - auxiliar para criar views/templates de modo facil e dinâmico
- [yup-validation] - validador simples e objetivo de parametros
- [express-async-errors] - quando criamos um middleware para controlar erros é necessário ter essa lib


## Comandos

  gerar config do typescrypt yarn tsc --init
  
  subir aplicação em dev yarn dev

  listar opções da orm yarn typeorm


## Hashs

  aula1 = #rumoaoproximonivel
  aula2 = #jornadainfinita
  aula3 = #focopraticagrupo
  aula4 = #neverstoplearning
  aula5 = #missioncomplete

## Run API

```bash
# Go to server folder
$ cd nlw4__api
# Install Dependencies
$ yarn install
# Run Aplication
$ yarn start
```

Access API at http://localhost:3333/


## Observação

  o node por padrão não entende o formato .ts que é nosso typescript sendo necessário utilizarmos um transpilador chamado typscript, para rodar algum script deve chamar ts-node-dev src/server.ts e não node src/server.ts .


## Testes Automatizados

  - 1: Testes unitários
    começar o teste para depois começar a aplicação
    será utilizado mocks para testar dados

  - 2: Testes de integração
    Request
      testar rotas
      testar controllers
      testa repositorio

    Response
      testa resposta do repositorio
      testa resposta do controller
      testa resposta rota

  - 3: Ponta a ponta (E2E)
      testa desde o frontend até o backend, desce um clique no botão


## Rotas

  POST -> http://localhost:3333/users
  POST -> http://localhost:3333/surveys
  POST -> http://localhost:3333/sendMail
   GET -> http://localhost:3333/nps/78ac997a-057e-4f38-9141-77e80505c3e6
   GET -> http://localhost:3333/surveys
   GET -> http://localhost:3333/answers/1?u=d124f015-10fc-48c6-9d10-ecde05f243ff