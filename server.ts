import dotenv from 'dotenv'
import mongoose from "mongoose";
import app from "./src/app";

dotenv.config()

// @ts-ignore
const Db = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000

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

        const errorMessage = 'Failed to connect to the database';

        app.use((_request, response) => {
            response.status(500).send({
                error: errorMessage,
            });
        });
        return false
    })
