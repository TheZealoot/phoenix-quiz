import express from "express";
import cors from "cors";
import questionRouter from "./routes/question.routes";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/v1/questions', questionRouter)

export default app