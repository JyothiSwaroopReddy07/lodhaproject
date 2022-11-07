const express = require("express"); 
const {createMeeting, getMeeting, getAllMeetings, updateMeeting, deleteMeeting} = require("../controllers/meetingController");
const router = express.Router();

router.route("/AllMeetings").get(getAllMeetings); 
router.route("/meeting/new").post(createMeeting);
router.route("/meeting/:id").put(updateMeeting).getMeeting(getMeeting).delete(deleteMeeting)


module.exports = router;