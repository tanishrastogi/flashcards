import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const {DB_NAME, DB_PASSWORD, DB_USERNAME, DB_HOST} = process.env

// const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
//   host:DB_HOST, 
//   dialect:"mysql"
// });

const sequelize = new Sequelize("mysql://ua0vwbnwkr5g0rpf:VM0DGN1q4cO6qjCGdyHC@bk6ois4acs9y2p40mmsq-mysql.services.clever-cloud.com:3306/bk6ois4acs9y2p40mmsq");

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;