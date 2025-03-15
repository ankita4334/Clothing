import express from "express";
import router from "./router/user-router.js";
import connectDb from "./utils/db.js";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/error-middleware.js";
import contactrouter from "./router/contact-router.js"

dotenv.config();
const app=express();
const PORT=3000;
app.use(express.json());

app.use(router);
app.use(contactrouter);
app.use(errorMiddleware)

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    });
});


