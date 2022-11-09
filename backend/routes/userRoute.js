const express = require("express");
const { getAllusers, createUser, updateUser, deleteUser, getUser} = require("../controllers/userController");
const router = express.Router();


router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route('/users').get(getAllusers)
router.route('/user/new').post(createUser);
router.route('/user/:id').get(getUser).put(updateUser).delete(deleteUser);

 
module.exports = router