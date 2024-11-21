import dotenv from "dotenv"
dotenv.config();

import express, { json } from "express"
import mongoose from "mongoose"
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js"

mongoose.connect(process.env.DB_PASSWORD)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log(error);
    });


const app = express();
app.use(express.json())

app.use("/api/user/", userRoutes);
// app.middleware(example url , exampleRoute); 

app.use("/api/auth/", authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
})
