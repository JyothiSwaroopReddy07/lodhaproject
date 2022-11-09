const express = require('express');
const errorMiddleWare = require("./middleware/error")
const app = express();

app.use(express.json());

//Route Imports
const users = require("./routes/userRoute");
const complaints = require("./routes/complaintsRoute");


app.use("/api/v1", users)
app.use("/api/v1",complaints);
// MiddleWare for Errors
app.use(errorMiddleWare);


module.exports = app;