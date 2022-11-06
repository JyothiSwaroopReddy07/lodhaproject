const express = require("express");
const { getAllusers, createUser, updateUser} = require("../controllers/userController");
const router = express.Router();


router.route('/users').get(getAllusers)
router.route('/user/new').post(createUser);
router.route('/user/:id').put(updateUser);

module.exports = router