const userController = require('./controller') ;

const express = require('express');
const router = express.Router();

//Get all users
router.get("/", async (req,res) => {
    try {
        userController.getUsers().then(data => res.json({
        status : "SUCCESS",
        data : data
        }
        ));
        // let {nom, prenom, email, num_tel, mdp} = req.body;
        // nom = nom.trim();
        // prenom = prenom.trim();
        // email = email.trim();
        // num_tel = num_tel.trim(); 
        // mdp = mdp.trim();
        // const user
    } catch (error) {
        res.json({
            status : "FAILED",
            message : error.message
        });
    }
});

module.exports = router;