const express = require("express");
const { getAllComplaints, createComplaint, updateComplaint, deleteComplaint, getUserComplaints, addNewEnum} = require("../controllers/complaintController");
const router = express.Router();

router.route('/AddComplaintType').post(addNewEnum);
router.route('/AllComplaints').get(getAllComplaints)
router.route('/complaint/new').post(createComplaint);
router.route('/complaint/:id').put(updateComplaint).get(getUserComplaints).delete(deleteComplaint);

 
module.exports = router