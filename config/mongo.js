const mongoose = require("mongoose");

const dbConnect = () => { 
    const DB_URI = process.env.DB_URI;

    mongoose.connect(DB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        retryWrites: true, 
        w: 'majority'
    }, (err) => { 
        if(err){ 
            console.log('*** CONEXION ERRONEA ***');
        }
    })
}

module.exports= dbConnect;