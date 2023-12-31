import { Dialect } from "sequelize";

export default () => ({
  database: {
    dialect: "mysql" as Dialect,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    logging: !!process.env.DATABASE_LOGGING || false
  }
});
