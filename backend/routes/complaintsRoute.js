const express = require("express");
const { getAllComplaints, createComplaint, updateComplaint, deleteComplaint, getUserComplaints, addNewEnum} = require("../controllers/complaintController");
const router = express.Router();
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.route('/AllComplaints').get(getAllComplaints)
router.route('/complaint/new').post(createComplaint);
router.route('/updatecomplaint').get(updateComplaint)
router.route('/deletecomplaint').get(deleteComplaint);
router.route('/complaint').get(getUserComplaints);
 
module.exports = router