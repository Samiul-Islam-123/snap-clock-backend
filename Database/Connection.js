// Importing Mongoose library for MongoDB connection
const mongoose = require('mongoose');

// Asynchronous function to connect to the database
async function connectDB(url){
    try{
        // Logging a message indicating the connection process initiation
        console.log("Connecting to Database...")
        
        // Await the connection to MongoDB using the provided URL
        await mongoose.connect(url)
        
        // Log a message indicating successful connection
        console.log("Connected to Database") 
    }
    catch(error){
        // Throw any errors encountered during the connection process
        throw error 
    }
};

// Exporting the connectDB function to make it accessible from other modules
module.exports = connectDB;
