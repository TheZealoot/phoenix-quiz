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
        console.log("DEJAN")
        const record = await Record.findOneAndUpdate({email: request.body.email}, request.body, {
            new: true,
            upsert: true // Make this update into an upsert
        });

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