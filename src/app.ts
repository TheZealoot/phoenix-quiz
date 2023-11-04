import express, {Request, Response} from "express";
import cors from "cors";
import questionRouter from "./routes/question.routes";
import recordRouter from "./routes/record.routes";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/v1/questions', questionRouter)
app.use('/api/v1/records', recordRouter)

app.get('/', (request: Request, response: Response) => {
    response.status(200).send({
        message: 'Phoenix Quiz is working!'
    })
})

export default app