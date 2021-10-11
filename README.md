<h1 align="center">NLW#4 | Nodejs</h1>

## 💻 About the Project

**NPS-API** to check a company's NPS® or Net Promoter Score

Application built on the <strong>Node.js</strong> track of the <strong>Next Level Week #04</strong> of [Rocketseat](https://rocketseat.com.br/) during the 22nd to 28th of February 2021.

## 🧑 What is an NPS

The NPS® or Net Promoter Score is a methodology created by Fred Reichheld in 2003. With NPS, it is possible to measure the level of loyalty and satisfaction of your customers. And that's why NPS has become such an important metric in driving customer success.

## 📒 Recursos
- [Ambiente](https://www.notion.so/Configura-es-do-ambiente-Node-js-ae9fea3f78894139af4268d198294e2a)
- [Guia NLW4 node.js](https://www.notion.so/Next-Level-Week-4-Node-js-NPS-Calculator-67981103adbb4f229187c802bcd0d787)
- [Ícones e Wallpapers](https://drive.google.com/drive/folders/11fxy_LmTD6S1FGTQbeu47QPLzvyuEGSs)

## ⚙️ Funcionalidades
- [x] Registo de utilizadores
- [x] Registo de pesquisas de satisfação
- [x] Envio de pesquisas por email
- [x] Cálculo do NPS a partir das respostas

## 👩‍💻 Tecnologias

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [Beekeeper Studio](https://www.beekeeperstudio.io/)
- [Insomnia](https://insomnia.rest/)
- [Ethereal-Email](https://ethereal.email/)

### 🚀 Módulos

- `typeorm` - ORM baseado em entidades
- `express` - Framework para servidor
- `uuid` - gerador de id's únicos, como estamos usando uma ORM, pode ser que alguma bd não comporte o `autoincrement`.
- `@types/express` - Permite visualizar métodos de herança do `express` no modelo de typescript
- `jest` - Utilizado para realizar os testes
- `@types/jest` - Utilizado para setar a tipagem do pacote `jest`, recomendado para ambiente de dev
- `supertest` - Utilizado para simular `fetchs`, é utilizado junto com o `jest` 
- `@types/supertest`
- `nodemailer` - Utilizado para enviar email's, tem um método de `test` que gera um link para visualizar como o email irá ficar
- `handlebars` - Auxiliar para criar `views`/`templates` de modo fácil e dinâmico
- `yup-validation` - Validador simples e objetivo de parametros
- `express-async-errors` - Quando criamos um `middleware` para controlar erros é necessário ter essa library

### 🛠️ Comandos para execução do projeto

```bash
$ yarn init
$ yarn add express @types/express -D
$ yarn add typescript -D
# Gerar o config do typescrypt 
$ yarn tsc --init
$ yarn add ts-node-dev -D
$ yarn add typeorm reflect-metadata
$ yarn add sqlite3

# Listar opções da orm 
$ yarn typeorm
$ npx typeorm migration:create -n CreateUsers
$ yarn typeorm migration:run
$ yarn add uuid @types/uuid -D

$ npx typeorm migration:create -n CreateSurveys
$ yarn add jest @types/jest -D
$ npx jest --init
$ yarn add ts-jest -D
$ npm i --save-dev @types/jest
$ npm i jest -D
$ yarn add cross-env -D
$ yarn add supertest @types/supertest -D

$ npx typeorm migration:create -n CreateSurveysUsers

$ yarn add nodemailer
$ yarn add handlebars
$ yarn add yup
$ yarn add express-async-errors
# Subir aplicação em dev 
$ yarn dev
```

### 💡 Observação

O `node.js` por padrão não entende o formato `.ts` que é o nosso `typescript` sendo necessário utilizarmos um transpilador chamado `typescript`, para rodar algum "script" deve chamar `ts-node-dev src/server.ts` e não `node src/server.ts`.

### 🚀 Testes Automatizados

**1. Testes unitários**
- começar o teste para depois começar a aplicação
- será utilizado `mocks` para testar dados

**2. Testes de integração**

**Request**
  - testar rotas
  - testar controllers
  - testa repositório

**Response**
  - testa resposta do repositório
  - testa resposta do `controller`
  - testa resposta da rota

**3. Ponta a ponta (E2E)**
- testa desde o `frontend` até o `backend`, desce um clique no botão

**4. Correr os testes**
- `Jest` foi a escolha de testar o aplicativo, para executar:

```bash
$ yarn test
```

### 🗺️ Routes

|route|HTTP method|params|description|
|:---|:---:|:---:|:---:
|`/users`|[POST](http://localhost:3333/users)|body com `name` e `email`|cria um novo utilizador
|`/users`|[GET](http://localhost:3333/users)|-|mostra todos os users
|`/surveys`|[POST](http://localhost:3333/surveys)|body com `title` e `description`|cria uma pesquisa
|`/surveys`|[GET](http://localhost:3333/surveys)|- |lista as pesquisas
|`/sendMail`|[POST](http://localhost:3333/sendMail)|body com `user.email` e `survey.id`|cria uma nova pesquisa
|`/answers/:value`|[GET](http://localhost:3333/answers/10?u=e3fd0114-1682-4950-badc-ed1c6f5b23a7)| - |definir a avaliação do `user` para uma pesquisa
|`/nps/:survey_id`|[GET](http://localhost:3333/nps/e3fd0114-1682-4950-badc-ed1c6f5b23a7)|passa o `survey_id` no url como parametro.|lista todas as respostas (NPS) dessa pesquisa

### Correr o projeto

```bash
# Clone this repository
$ git clone https://github.com/sestevao/api.git
# Access the repository on your terminal
$ cd api
# Install Dependencies
$ yarn install
# Run Aplication
$ yarn start
```

Access `API` at http://localhost:3333/

### ✏️ Códigos

**Dia 1** - Fundamentos do Node.js
**Dia 2** - Iniciando com a base de dados
**Dia 3** - Testando a nossa aplicação
**Dia 4** - Envio de e-mail
**Dia 5** - Finalizando nossa API com validações

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

---

<p align="center"><sub>made with 💜 by sestevao</sub></p>

