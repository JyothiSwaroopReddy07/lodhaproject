const express = require("express"); 
const {createMeeting, getMeeting, getAllMeetings, updateMeeting, deleteMeeting} = require("../controllers/meetingController");
const router = express.Router();
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.route("/AllMeetings").get(getAllMeetings); 
router.route("/meeting/new").post(createMeeting);
router.route("/meeting/:id").put(updateMeeting).getMeeting(getMeeting).delete(deleteMeeting)


module.exports = router;