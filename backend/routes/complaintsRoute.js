const express = require("express");
const { getAllComplaints, createComplaint, updateComplaint, deleteComplaint, getUserComplaints} = require("../controllers/complaintController");
const router = express.Router();


router.route('/AllComplaints').get(getAllComplaints)
router.route('/complaint/new').post(createComplaint);
router.route('/complaint/:id').put(updateComplaint).get(getUserComplaints).delete(deleteComplaint);

 
module.exports = router