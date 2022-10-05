const { Sequelize, Model, DataTypes } = require("sequelize");

const connect = () => {

    const hostName = "ec2-52-212-228-71.eu-west-1.compute.amazonaws.com";
    const userName = process.env.USER;
    const password = process.env.PASSWORD;
    const database = "de58pvdtukgkt4";
    const dialect = process.env.DIALECT;

    const sequelize = new Sequelize(database, "nwmvgkrhxtaucr", "31e544f84ee380bd0731cdd1c9236dd6351c85e344451695285dcc2a7eaf65ff", {
        host: hostName,
        dialect: "postgres",
        //operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
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