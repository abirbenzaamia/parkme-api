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
    } catch (error) {
        res.json({
            status : "FAILED",
            message : error.message
        });
    }
});

//signup 
router.post("/signup" , async (req,res) => {
    try {
          let {nom, prenom, email, num_tel, mdp} = req.body;
          nom = nom.trim();
          prenom = prenom.trim();
          email = email.trim();
          num_tel = num_tel.trim(); 
          mdp = mdp.trim();
          userController.createUser(req.body).then(data => res.json({
            status : "SUCCESS",
            data : data
            }
          )).catch(error => {
            res.json({
                status : "FAILED",
                message : error.message
            });
          });
    } catch (error) {
        res.json({
            status : "FAILED",
            message : error.message
        });
    }
});
 //signin 
 router.post("/signin" , async (req,res) => {
    try {
        let {email, mdp} = req.body;
        email = mdp.trim(); 
        mdp = mdp.trim();
        userController.signUser(req.body).then(data => res.json({
          status : "SUCCESS",
          data : data
          }
        )).catch(error => {
          res.json({
              status : "FAILED",
              message : error.message
          });
        });
  } catch (error) {
      res.json({
          status : "FAILED",
          message : error.message
      });
  }
 })

module.exports = router;