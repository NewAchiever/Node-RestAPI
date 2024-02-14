const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("MongoDB connected.")).catch(e=>console.log(e));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)

app.get("/users", (req, res)=>{
    res.send("Welcome to user page!")
})

app.listen(8800, ()=>{
    console.log("Backend server is running!")
})


