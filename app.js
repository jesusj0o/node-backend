require("dotenv").config();
const express = require("express"); 
const cors = require("cors"); 
const morganBody = require("morgan-body"); 
const dbConnect = require('./config/mongo');

const app = express(); 

app.use(cors()); 
app.use(express.json());
app.use(express.static("storage"));
morganBody(app, {
    
})
const port = process.env.PORT || 3000; 

/*
Routes Here
*/

app.use("/api", require("./routes"));

app.listen(port, () => { 
    console.log(`app ready on http://localhost:${port}`);
})

dbConnect();