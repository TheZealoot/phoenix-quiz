import express from "express";
import cors from "cors";
import questionRouter from "./routes/question.routes";
import recordRouter from "./routes/record.routes";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/v1/questions', questionRouter)
app.use('/api/v1/records', recordRouter)

export default app