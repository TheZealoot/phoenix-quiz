import {Router} from "express";
import {createRecord, getAllRecords} from "../controllers/record.controller";

const recordRouter = Router()

recordRouter
    .route('/')
    .get(getAllRecords)
    .post(createRecord)

export default recordRouter