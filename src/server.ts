import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from "cors";
import router from "./routes/quiz.routes";
import mongoose from "mongoose";

dotenv.config()

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8081

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

mongoose.connect('mongodb://localhost:27017/?tls=false&directConnection=true')

app.get('/health-check', (req: Request, res: Response) => {
    res.send('Hello Phoenix Team!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})