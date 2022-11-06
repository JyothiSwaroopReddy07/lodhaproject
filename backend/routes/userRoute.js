const express = require("express");
const { getAllusers, createUser, updateUser, deleteUser, getUser} = require("../controllers/userController");
const router = express.Router();



router.route('/users').get(getAllusers)
router.route('/user/new').post(createUser);
router.route('/user/:id').get(getUser).put(updateUser).delete(deleteUser);

 
module.exports = router