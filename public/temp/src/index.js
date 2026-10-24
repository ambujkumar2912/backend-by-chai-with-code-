// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import connectDB from "./db/index.js";

dotenv.config({ path: fileURLToPath(new URL("../.env", import.meta.url)) });
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
connectDB();







// TARIKA 1 ..............................//

// import express from "express"
// const app = express()


// ( async () => {


// try { 

//    await  mongoose.connect('${process.env.MONGO_DB}/${DB_NAME}')
//     app.on("error", () => {
//         console.log("Error" , error);
//         throw error
        
//     })

//     app.listen( process.env.PORT , () => {
//         console.log('app is listening ${process.env.PORT}');
        
//     })

// } catch(error){
//     console.error("ERROR:" , error)
//     throw error
// }




// })()
