<h1 align="center">NLW#4 | Nodejs</h1>

## 💻 About the Project

**NPS-API** to check a company's NPS® or Net Promoter Score

Application built on the `Node.js` track of the <strong>Next Level Week #04</strong> of [@rocketseat](https://rocketseat.com.br/) during the 22nd to 28th of February 2021.

## 🧑 What is an NPS

The NPS® or Net Promoter Score is a methodology created by Fred Reichheld in 2003. With NPS, it is possible to measure the level of loyalty and satisfaction of your customers. And that's why NPS has become such an important metric in driving customer success.

## 🛠️ Features

- [x] User registration
- [x] Registration of satisfaction surveys
- [x] Sending surveys by email
- [x] Calculation of NPS from answers

## ✨ Technologies

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [Beekeeper Studio](https://www.beekeeperstudio.io/)
- [Insomnia](https://insomnia.rest/)
- [Ethereal-Email](https://ethereal.email/)

### 🚀✨ Modules

- `typeorm` - Entity-based ORM
- `express` - Server framework
- `uuid` - unique id generator, as we are using an ORM, it may be that some database does not support `autoincrement`.
- `@types/express` - Allows you to view `express` inheritance methods in the typescript template
- `jest` - Used to perform the tests
- `@types/jest` - Used to set the type of package `jest`, recommended for dev environment
- `supertest` - Used to simulate `fetchs`, is used together with `jest`
- `@types/supertest`
- `nodemailer` - Used to send emails, it has a `test` method that generates a link to see what the email will look like
- `handlebars` - Helper to create `views`/`templates` easily and dynamically
- `yup-validation` - Simple and objective parameter validator
- `express-async-errors` - When creating a `middleware` to handle errors it is necessary to have this library

## 🎨 Layout

- [Ambiente](https://www.notion.so/Configura-es-do-ambiente-Node-js-ae9fea3f78894139af4268d198294e2a)
- [Guia NLW4 node.js](https://www.notion.so/Next-Level-Week-4-Node-js-NPS-Calculator-67981103adbb4f229187c802bcd0d787)
- [Ícones e Wallpapers](https://drive.google.com/drive/folders/11fxy_LmTD6S1FGTQbeu47QPLzvyuEGSs)

## 💡 Tips

The `node.js` by default doesn't understand the `.ts` format that is our `typescript` so we need to use a transpilator called `typescript`, to run some script it must call `ts-node-dev src/server .ts` and not `node src/server.ts`.

## 🧪 Automated Tests

**1. Unitary tests**
- [ ] start the test and then start the application
- [ ] `mocks` will be used to test data

**2. Integration Tests**

  - **Request**
    - [ ] test routes
    - [ ] test controller
    - [ ] test repository

  - **Response**
    - [ ] test repository response
    - [ ] test `controller`s response
    - [ ] test route response

**3. End to end (E2E)**
- [ ] tests from the `frontend` to the `backend`, one click on the button

**4. Run the tests**
- [ ] `Jest` was the choice to test the application, to run:

  ```bash
  $ yarn test
  ```

### 🗺️ Routes

|route|HTTP method|params|description|
|:---|:---:|:---:|:---:
|`/users`|[POST](http://localhost:3333/users)|body with `name` and `email`|creates a new user
|`/users`|[GET](http://localhost:3333/users)|-|show all users
|`/surveys`|[POST](http://localhost:3333/surveys)|body with `title` and `description`|creates a search
|`/surveys`|[GET](http://localhost:3333/surveys)|- |list the searches
|`/sendMail`|[POST](http://localhost:3333/sendMail)|body with `user.email` and `survey.id`|creates a new survey
|`/answers/:value`|[GET](http://localhost:3333/answers/10?u=e3fd0114-1682-4950-badc-ed1c6f5b23a7)| - |set `user` rating for a survey
|`/nps/:survey_id`|[GET](http://localhost:3333/nps/e3fd0114-1682-4950-badc-ed1c6f5b23a7)|passes `survey_id` in url as parameter.|lists all responses (NPS) from this survey

## ✅ Getting started

```
$ yarn init
$ yarn add express @types/express -D
$ yarn add typescript -D
```

```
# Generate typescript config
$ yarn tsc --init
$ yarn add ts-node-dev -D
$ yarn add typeorm reflect-metadata
$ yarn add sqlite3
```

```
# List order options
$ yarn typeorm
$ npx typeorm migration:create -n CreateUsers
$ yarn typeorm migration:run
$ yarn add uuid @types/uuid -D
```

```
$ npx typeorm migration:create -n CreateSurveys
$ yarn add jest @types/jest -D
$ npx jest --init
$ yarn add ts-jest -D
$ npm i --save-dev @types/jest
$ npm i jest -D
$ yarn add cross-env -D
$ yarn add supertest @types/supertest -D
```

```
$ npx typeorm migration:create -n CreateSurveysUsers
```

```
$ yarn add nodemailer
$ yarn add handlebars
$ yarn add yup
$ yarn add express-async-errors
```

```
# start application on dev 
$ yarn dev
```

```bash
# Clone this repository
$ gh clone https://github.com/sestevao/api.git

# Access the repository on your terminal
$ cd api

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```

Access `API` at http://localhost:3333/

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

---

<p align="center"><sub>made with 💜 by sestevao</sub></p>

