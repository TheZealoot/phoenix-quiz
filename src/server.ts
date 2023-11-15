import dotenv from 'dotenv'
import mongoose from "mongoose";
import app from "./app";

dotenv.config({path: `${__dirname}/config.env`})

// @ts-ignore
const Db = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)
mongoose
    .connect(Db)
    .then(() => { console.log('DB connection successful') })


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})