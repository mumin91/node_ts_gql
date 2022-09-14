import { Sequelize } from 'sequelize';
const pgDb = new Sequelize("qdb", "pguser", "pgpassword", {
    host: "db",
    dialect: "postgres",
});

export default pgDb;

