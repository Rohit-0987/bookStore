import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
const MongoDBURI = process.env.MongoDBURI;
(async () => {
    try {
        await mongoose.connect(MongoDBURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error: ", error);
    }
})();


//Defining route
app.use("/book",bookRoute)

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})