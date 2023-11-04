import {Request, Response} from "express";
import {Record} from "../models/record";


export const getAllRecords = async (request: Request, response: Response) => {
    try {
        const records = await Record.find()

        response.status(200).json(records)
    } catch (e) {
        response.status(404).send()
    }
}

export const createRecord = async (request: Request, response: Response) => {
    try {
        const record = await Record.create(request.body);

        response.status(201).json({
            status: 'success',
            data: {
                data: record
            }
        });
    } catch (e) {
        response.status(500).send()
    }
}