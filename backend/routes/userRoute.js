const express = require("express");
const { getAllusers, createUser, updateUser, deleteUser, getUser, loginUser} = require("../controllers/userController");
const router = express.Router();
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// router.route("/login").post(loginUser);

// router.route("/password/forgot").post(forgotPassword);

// router.route("/password/reset/:token").put(resetPassword);

// router.route("/logout").get(logout);

// router.route("/me").get(isAuthenticatedUser, getUserDetails);

// router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/login").post(loginUser);
// router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route('/users').get(getAllusers)
router.route('/register').post(createUser);
router.route('/userupdate').get(getUser).put(updateUser).delete(deleteUser);

 
module.exports = router