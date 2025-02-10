import express from "express";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import routes here

// db connect here

const app = express();
const PORT = 5005;

app.use(express.static(path.join(__dirname, "build")));

app.get("/rahman", (req, res)=>{
   try{
       res.status(200).json({msg: "hello sneha"})
   } catch(error){
       res.status(401).json(error)
   }
});


// write all routes from controllers, middleware, public api's in between here

// new 3 lines 

app.get("/*", (req, res)=>{
   res.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(PORT, ()=>{
    console.log(`your web app is running live! at ${PORT}`);
    
})