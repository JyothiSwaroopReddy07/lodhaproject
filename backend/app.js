const express = require('express');
const errorMiddleWare = require("./middleware/error")
const app = express();

app.use(express.json());

//Route Imports
const users = require("./routes/userRoute");

app.use("/api/v1", users)

// MiddleWare for Errors
app.use(errorMiddleWare);


module.exports = app;