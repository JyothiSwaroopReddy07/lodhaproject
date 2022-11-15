const express = require('express');
const errorMiddleWare = require("./middleware/error")
const app = express();

app.use(express.json());

//Route Imports
const users = require("./routes/userRoute");
const complaints = require("./routes/complaintsRoute");
const issues = require("./routes/issueRoute")

app.use("/api/v1", users);
app.use("/api/v1",complaints);
app.use("/api/v1",issues);
// MiddleWare for Errors


module.exports = app;