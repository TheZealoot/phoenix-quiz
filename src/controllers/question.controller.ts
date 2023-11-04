import {Request, Response} from 'express'
import {Question} from "../models/question";
import {getQuestions, shuffleAnswers} from "../utils";

export const getAllQuestions = async (request: Request, response: Response) => {
    try {
        const allQuestions = await Question.find()

        console.log(allQuestions.length)
        const questions = getQuestions(allQuestions)
        console.log(questions.length)
        response.status(200).json(shuffleAnswers(questions))
    } catch (e) {
        response.status(404).send()
    }
}