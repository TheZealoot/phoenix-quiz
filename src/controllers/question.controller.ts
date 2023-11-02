import {Request, Response} from 'express'
import {Question} from "../models/question";

export const getAllQuestions = async (request: Request, response: Response) => {
    try {
        const questions = await Question.find()

        response.status(200).json(questions)
    } catch (e) {
        response.status(404).send()
    }
}