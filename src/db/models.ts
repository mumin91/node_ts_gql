import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("qdb", "pguser", "pgpassword", {
  host: "localhost",
  dialect: "postgres",
});



export default sequelize;