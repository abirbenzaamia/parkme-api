const { Sequelize, Model, DataTypes } = require("sequelize");

const connect = () => {

    const hostName = process.env.HOST;
    const userName = process.env.USER;
    const password = process.env.PASSWORD;
    const database = process.env.DB;
    const dialect = process.env.DIALECT;

    const sequelize = new Sequelize(database,userName, password, {
        host: hostName,
        dialect: "postgres",
        //operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000,
            
        },
        dialectOptions: {
      ssl: process.env.NODE_ENV !== 'development' ?  {      /* <----- Add SSL option */
        require: true,
        rejectUnauthorized: false 
      } : false
    },
             
         
    },
    
    );

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.users = require("../api/user/model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}