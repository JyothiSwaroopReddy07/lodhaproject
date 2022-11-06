const express = require("express");
const { getAllusers, createUser } = require("../controllers/userController");
const router = express.Router();


router.route('/users').get(getAllusers)
router.route('/user/new').post(createUser);

module.exports = router