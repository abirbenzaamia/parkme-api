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
            idle: 5000
        },
        
            connectionString: process.env.DATABASE_URL || 'postgres://nwmvgkrhxtaucr:31e544f84ee380bd0731cdd1c9236dd6351c85e344451695285dcc2a7eaf65ff@ec2-52-212-228-71.eu-west-1.compute.amazonaws.com:5432/de58pvdtukgkt4',
            ssl:{ 
            require: true,
            rejectUnauthorized: false
    } 
             
         
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.users = require("../api/user/model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}