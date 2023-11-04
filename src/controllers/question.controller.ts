import {Request, Response} from 'express'
import {Question, QuestionDocType} from "../models/question";
import {getQuestions, shuffleAnswers} from "../utils";


export const getAllQuestions = async (request: Request, response: Response) => {
    try {
        const allQuestions: QuestionDocType[] = await Question.find()
        console.log('All questions: ' + allQuestions.length)

        const questions = getQuestions(allQuestions)
        console.log('Questions: ' + questions.length)

        console.log('1st Question answer before shuffle: ' + questions[0].questionAnswers)
        shuffleAnswers(questions)
        console.log('1st Question answer after shuffle: ' + questions[0].questionAnswers)

        response.status(200).json(questions)
    } catch (e) {
        response.status(404).send()
    }
}