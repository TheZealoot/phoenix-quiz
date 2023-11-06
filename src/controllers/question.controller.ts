import {Request, Response} from 'express'
import {Question, QuestionDocType} from "../models/question";
import {getQuestions, shuffleAnswers} from "../utils";


export const getAllQuestions = async (request: Request, response: Response) => {
    try {
        const allQuestions: QuestionDocType[] = await Question.find()

        const questions = getQuestions(allQuestions)

        shuffleAnswers(questions)

        response.status(200).json(questions)
    } catch (e) {
        response.status(404).send()
    }
}