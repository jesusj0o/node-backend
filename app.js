require("dotenv").config();
const express = require("express"); 
const cors = require("cors"); 
const morganBody = require("morgan-body"); 
const dbConnect = require('./config/mongo');

const app = express(); 

if(!process.env.DB_URI) throw new Error("DB_URI is not defined (.env file)"); 
if(!process.env.JWT_SECRET) throw Error("JWT_SECRET is not defined (.env file)");


app.use(cors()); 
app.use(express.json());
app.use(express.static("storage"));


app.use("/api", require("./routes"));

dbConnect();

module.exports = app; 