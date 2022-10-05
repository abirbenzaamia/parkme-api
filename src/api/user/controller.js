const { connect } = require('../../config/db.config');
const bcrypt = require('bcrypt');
const saltRounds = 12;

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

     async createUser(user){
         let data = {}
         let count ;

         try {
             //check if user exists
             count = await this.db.users.count({ where: { email: user.email} });
             if (count != 0){
                 throw new Error ('user already exists');
             }
           
             user.mdp = await bcrypt.hash(user.mdp,saltRounds);
             user.createdate = new Date().toISOString();
             data = await this.db.users.create(user)
             return data ;
         } catch (err) {
             throw new Error (err);
            

         }
 };
     async signUser({email,mdp}){
        //let data = {}
        let user ;
        let checkPwd;
        try {
            //check if user exists 
            user = await this.db.users.findAll({ where: { email: email }});
             if (user.length != 0){
                 //check if password is corret 
                 checkPwd = await bcrypt.compare(mdp ,user[0].mdp )
                 if (checkPwd) {
                    return user[0];
                 } else {
                    throw new Error ('password is not correct');
                 }
             }else{
                throw new Error ('user does not exist');
             }
        } catch (err) {
            throw new Error (err);
        }
     }
}
module.exports = new UserController();