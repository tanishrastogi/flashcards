import { Sequelize } from "sequelize";

const sequelize = new Sequelize("flashcard", 'root', 'charlie@8896', {
  host:'localhost', 
  dialect:"mysql"
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;