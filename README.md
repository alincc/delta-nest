# Multi School Delta Api

## 79 Endpoints

This api includes image uploads and role base authentication, this api runs on node 10 or greather
and **needs mongodb server**
running at the default port; furthermore, all routes a student can access a principal can too but routes that only principals are allowed to access requiere a principal Token. Tokens are generated through the Auth Endpoint. **Deletions follow cascade deletions on all collections** , for example deleting the principal will not delete a school but deleting a school will delete all records at that school like payments and students.

#### Auth Endpoints (3)

| Method | route          | Level | Objective  |
| ------ | :------------- | :---- | :--------: |
| POST   | auth/login     | Any   |    app     |
| POST   | auth/signUp    | Any   |    app     |
| POST   | auth/:username | Any   | Validation |

#### Flight Endpoints (6)

| Method | route              | Level     | Objective |
| ------ | :----------------- | :-------- | :-------: |
| GET    | flights/           | Principal |    app    |
| GET    | flights/:id        | Student   |    app    |
| POST   | flights/           | Principal |    app    |
| PUT    | flights/:id        | Principal |    app    |
| DELETE | flights/:id        | Principal |    app    |
| GET    | flights/school/:id | Principal |    app    |

#### Grade Endpoints (8)

| Method | route              | Level     | Objective |
| ------ | :----------------- | :-------- | :-------: |
| GET    | grades/            | Principal |    app    |
| GET    | grades/:id         | Student   |    app    |
| POST   | grades/            | Principal |    app    |
| PUT    | grades/:id         | Principal |    app    |
| DELETE | grades/:id         | Principal |    app    |
| GET    | grades/school/:id  | Principal |    app    |
| GET    | grades/subject/:id | Principal |    app    |
| GET    | grades/student/:id | Student   |    app    |

#### Group Endpoints (8)

| Method | route                         | Level     | Objective |
| ------ | :---------------------------- | :-------- | :-------: |
| GET    | groups/                       | Principal |    app    |
| GET    | groups/:id                    | Student   |    app    |
| POST   | groups/                       | Principal |    app    |
| PUT    | groups/:id                    | Principal |    app    |
| DELETE | groups/:id                    | Principal |    app    |
| GET    | groups/school/:id             | Principal |    app    |
| PUT    | groups/:id/student/:studentId | Principal |    app    |
| DELETE | groups/:id/student/:studentId | Principal |    app    |

#### Maintenance Endpoints (2)

| Method | route        | Level     |  Objective  |
| ------ | :----------- | :-------- | :---------: |
| GET    | maintenance/ | Principal | maintenance |
| DELETE | maintenance/ | Principal | maintenance |

#### Payment Endpoints (8)

| Method | route                 | Level     | Objective  |
| ------ | :-------------------- | :-------- | :--------: |
| GET    | payments/             | Principal |    app     |
| GET    | payments/:id          | Student   |    app     |
| POST   | payments/             | Principal |    app     |
| PUT    | payments/:id          | Principal |    app     |
| DELETE | payments/:id          | Principal |    app     |
| GET    | payments/school/:id   | Principal |    app     |
| GET    | payments/student/:id  | Student   |    app     |
| GET    | payments/folio/:folio | Principal | Validation |

#### Principal Endpoints (6)

| Method | route                 | Level     | Objective |
| ------ | :-------------------- | :-------- | :-------: |
| GET    | principals/           | Principal |    app    |
| GET    | principals/:id        | Principal |    app    |
| POST   | principals/           | Principal |    app    |
| PUT    | principals/:id        | Principal |    app    |
| DELETE | principals/:id        | Principal |    app    |
| GET    | principals/school/:id | Principal |    app    |

#### Program Endpoints (8)

| Method | route                           | Level     | Objective  |
| ------ | :------------------------------ | :-------- | :--------: |
| GET    | programs/                       | Principal |    app     |
| GET    | programs/:id                    | Student   |    app     |
| POST   | programs/                       | Principal |    app     |
| PUT    | programs/:id                    | Principal |    app     |
| DELETE | programs/:id                    | Principal |    app     |
| PUT    | programs/:id/subject/:subjectId | Principal |    app     |
| DELETE | programs/:id/subject/:subjectId | Principal |    app     |
| GET    | programs/folio/:folio           | Principal | Validation |

#### School Endpoints (6)

| Method | route                 | Level     | Objective |
| ------ | :-------------------- | :-------- | :-------: |
| GET    | schools/              | Principal |    app    |
| GET    | schools/:id           | Student   |    app    |
| POST   | schools/              | Principal |    app    |
| PUT    | schools/:id           | Principal |    app    |
| DELETE | schools/:id           | Principal |    app    |
| GET    | schools/principal/:id | Principal |    app    |

#### Student Endpoints (7)

| Method | route               | Level     | Objective |
| ------ | :------------------ | :-------- | :-------: |
| GET    | students/           | Principal |    app    |
| GET    | students/:id        | Student   |    app    |
| POST   | students/           | Principal |    app    |
| PUT    | students/:id        | Principal |    app    |
| DELETE | students/:id        | Principal |    app    |
| GET    | students/school/:id | Principal |    app    |
| GET    | students/group/:id  | Principal |    app    |

#### Subject Endpoints (8)

| Method | route                | Level     | Objective  |
| ------ | :------------------- | :-------- | :--------: |
| GET    | subjects/            | Principal |    app     |
| GET    | subjects/:id         | Principal |    app     |
| POST   | subjects/            | Principal |    app     |
| PUT    | subjects/:id         | Principal |    app     |
| DELETE | subjects/:id         | Principal |    app     |
| GET    | subjects/school/:id  | Principal |    app     |
| GET    | subjects/program/:id | Principal |    app     |
| GET    | folio/:folio         | Principal | Validation |

#### Subject Endpoints (7)

| Method | route               | Level     | Objective |
| ------ | :------------------ | :-------- | :-------: |
| GET    | subjects/           | Principal |    app    |
| GET    | subjects/:id        | Principal |    app    |
| POST   | subjects/           | Principal |    app    |
| PUT    | subjects/:id        | Principal |    app    |
| DELETE | subjects/:id        | Principal |    app    |
| GET    | subjects/school/:id | Principal |    app    |
| GET    | subjects/group/:id  | Principal |    app    |

#### Upload Endpoints (2)

| Method | route                      | Level     | Objective |
| ------ | :------------------------- | :-------- | :-------: |
| GET    | uploads/avatar/:parent/:id | Any       |    app    |
| POST   | uploads/avatar/:file       | Principal |    app    |

## Installation and Usage

**You need at least node 10 running on your machine and mongo 4.2**

```bash
npm i -g @nestjs/cli
npm i
nest build
node dist/main.js
```

## Development

**You need at least node 10 running on your machine and mongo 4.2**

```bash
npm i -g @nestjs/cli
npm i
nest serve --watch
```
