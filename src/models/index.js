import { sequelizeConfig } from "../../config.js";
import Sequelize from "sequelize";
import userModel from "./user.model.js";
import colorModel from "./color.model.js";
import paletteModel from "./palette.model.js";


const sequelize = new Sequelize(sequelizeConfig.DB, sequelizeConfig.USER, sequelizeConfig.PASSWORD, {
    host: sequelizeConfig.HOST,
    dialect: sequelizeConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: sequelizeConfig.pool.max,
      min: sequelizeConfig.pool.min,
      acquire: sequelizeConfig.pool.acquire,
      idle: sequelizeConfig.pool.idle
    }
  });

  sequelize.sync({ alter: true })
    .then(() => {
      console.log('Таблицы созданы');
      // Здесь можно продолжить выполнение кода вашего проекта
    })
    .catch((error) => {
      console.error('Ошибка при создании таблиц:', error);
    });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.users = userModel(sequelize, Sequelize);
  db.color = colorModel(sequelize, Sequelize)
  db.palette = paletteModel(sequelize, Sequelize)


  export default db