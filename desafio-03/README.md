# bootcamp-gostack-desafio-03

> https://github.com/Rocketseat/bootcamp-gostack-desafio-03/blob/master/README.md

## requisitos para rodar

* NodeJS
* Yarn
* Docker

## MySql

```bash
$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 -d mysql:5.7.28
```

## Run

```bash
$ yarn
$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all
$ yarn dev
$ yarn queue
```
