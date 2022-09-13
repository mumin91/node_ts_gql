import { Sequelize } from 'sequelize';
const pgDb = new Sequelize("qdb", "pguser", "pgpassword", {
    host: "localhost",
    dialect: "postgres",
});

export default pgDb;

