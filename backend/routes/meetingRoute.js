const express = require("express"); 
const {createMeeting, getAllMeetings} = require("../controllers/meetingController");
const router = express.Router();
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.route("/AllMeetings").get(getAllMeetings); 
router.route("/meeting/new").post(createMeeting);

module.exports = router;