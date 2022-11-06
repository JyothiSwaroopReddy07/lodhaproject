const app = require("./app");
const dotenv = require("dotenv")
const path = require('path')

const connectDatabase = require("./config/database");
const { Server } = require("http");

//config
dotenv.config({ path: path.resolve(__dirname, '\config\\config.env') })

// connecting to database
connectDatabase();



app.listen(process.env.PORT, () => {
    console.log(`Server id working on http://localhost:${process.env.PORT}`);
})

// Unhandled Promise Rejection
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    Server.close(()=>{
        process.exit(1);
        
    })
})
