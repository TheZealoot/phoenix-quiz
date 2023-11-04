import dotenv from 'dotenv'
import mongoose from "mongoose";
import app from "./src/app";

dotenv.config({path: `./config.env`})

// @ts-ignore
const Db = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)
mongoose
    .connect(Db)
    .then(() => {
        console.log('DB connection successful')
    })


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8081
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})