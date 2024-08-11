import {DataTypes} from "sequelize";

import sequelize from "../db/conn.js";

const Flashcard = sequelize.define('Flashcard', {
  question:{
    type:DataTypes.STRING,
    allowNull:false
  },
  answer:{
    type:DataTypes.STRING,
    allowNull:false
  }
}, {
  tableName:'flashcard'
})

export default Flashcard;