module.exports = (sequelize, DataTypes, Model) => {

    class Users extends Model {}

    Users.init({
        // Model attributes are defined here
        nom: {
          type: DataTypes.STRING,
          allowNull: false
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          },
          num_tel: {
            type: DataTypes.STRING,
            allowNull: false
          },
          mdp: {
            type: DataTypes.STRING,
            allowNull: false
          },
        
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'users' // We need to choose the model name
      });
      
      return Users;
}