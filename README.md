# Challenge Flock IT (backend)

Este proyecto es una aplicacion sencilla de backend que permite realizar login, registro y obtener la informacion de usuario

RUTA PRINCIPAL: https://flock-it-challenge-backend-production.up.railway.app

## Tecnologías

- [Node](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [Typescript](https://www.typescriptlang.org/)
- [Passport](https://www.passportjs.org/)
- [TypeORM](https://typeorm.io/)
- [Postgres](https://www.postgresql.org/)


## Requerimientos

1. node 16.15
2. npm 8.11.0
3. base de datos postgres

4. `git clone https://github.com/kevob1994/flock-it-challenge-backend.git`
5. `cd flock-it-challenge-backend`
6. `npm install`


## Configuración

- Previamente tener instalado la base de datos postgres
- Crear archivo .env
- Agregar las variables de entornos

DATABASE_NAME  (Nombre de base de datos)
DATABASE_PASSWORD (Contraseña de la base datos)
DATABASE_USER (Usuario con acceso a la base de datos)
PORT (Puerto del servidor)
DATABASE_PORT (Puerto de la base de datos)
TOKEN_SECRET (Token para JWT)
DATABASE_HOST (Host de la base de datos)



### Build

Para realizar el build de la aplicación y los paquetes, ejecute el siguiente comando:

```
npm run build
```

### Develop

Para usar la aplicación en ambiente de desarrollo, ejecute el siguiente comando:

```
npm run dev
```
