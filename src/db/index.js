import mongoose from "mongoose";;
import { DB_NAME } from "../constants.js";

console.log("Mongo URI:", process.env.MONGODB_URI)
const connnectDB = async ()=>{
    try{
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! DB_HOST:${ConnectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MongoDB connnection Failed" , error);
        process.exit(1);
    }
}

export default connnectDB;