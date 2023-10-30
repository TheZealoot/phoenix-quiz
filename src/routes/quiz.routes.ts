import {Request, Response, Router} from "express";
import mongoose from "mongoose";
import {IQuestion} from "../models/Question";

const router = Router()
const Question = mongoose.model<IQuestion>('Question')

router.get('/', async (req: Request, res: Response) => {
    const questions = await Question.find()
    return res.status(200).send(questions)
})

router.get('/question/:id', (req: Request, res: Response) => {
    const question = Question.findById(id)
    res.json()
})
export default router