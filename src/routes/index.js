const express = require("express");
const router = express.Router();

const userRoutes = require("./../api/user/routes");

router.use("/users",userRoutes);

module.exports = router ;

