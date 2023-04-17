import mongoose from "mongoose";
import app from "./app.js";

(
    async()=>{
        try{
            await mongoose.connect("mongodb://localhost:27017/testsetup")
            console.log("DB CONNECTED");
            
            const onListening=()=>{
                console.log("Listening on PORT 5000");
            }
    
            app.listen(5000,onListening)

            app.get("/",(req,res)=>{
              res.send("<h1>Server is Working</h1>")  
            })

            }
        catch(error){
            console.log("Listening on PORT 5000");
            throw err;
        }

    }
)
()