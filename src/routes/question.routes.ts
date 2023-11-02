import { Router } from "express";
import { getAllQuestions } from "../controllers/question.controller";

const questionRouter = Router()

questionRouter
    .route('/')
    .get(getAllQuestions)

export default questionRouter