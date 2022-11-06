const express = require("express");
const { getAllComplaints, createComplaint, updateComplaint} = require("../controllers/complaintController");
const router = express.Router();


router.route('/complaints').get(getAllComplaints)
router.route('/complaint/new').post(createComplaint);
router.route('/complaint/:id').put(updateComplaint);

 
module.exports = router