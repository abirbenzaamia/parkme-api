const { connect } = require('../../config/db.config');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserController {

    db = {};

    constructor() {
        this.db = connect();
         //For Development
         this.db.sequelize.sync({ force: false, alter: true}).then(() => {
             console.log("Drop and re-sync db.");
         });
    }

    async getUsers(){
        try {
            const users = await this.db.users.findAll();
            console.log('users:::',users);
            return users;
        } catch (err) {
            console.log("error",err);
            return[];
        }
    }
    
    // async createUser(user){
    //     let data = {}
    //     let count ;
    //     try {
    //         //check if user exists
    //         count = await this.db.users.count({ where: { email: user.email} });
    //         if (count != 0){
    //             return {'message': "user already exists"}
    //         }
            
    //         const hash = bcrypt.hashSync(mdp, saltRounds);
    //         user.mdp = hash;
    //         user.createdate = new Date().toISOString();
    //         data = await this.db.users.create(user)
    //         return data ;
    //     } catch (err) {
    //         console.log("errooooor",err);
    //     }
    // }

   
}

module.exports = new UserController();