import dotenv from 'dotenv'
import mongoose from "mongoose";
import app from "./src/app";

dotenv.config()

// @ts-ignore
const Db = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8081

mongoose
    .connect(Db)
    .then(() => {
        console.log('DB connection successful')
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    })
    .catch(err => {
        console.error(err)
        return false
    })
