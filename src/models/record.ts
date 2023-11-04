import {model, Model, Schema} from "mongoose";
import {getLocalTimestamp} from "../utils";

export interface IRecord {
    fullName: string,
    email: string,
    totalPoints: number,
    feedback: string,
    timestamp: Date
}

export type RecordType = Model<IRecord>

const recordSchema = new Schema<IRecord, RecordType>({
    fullName: {type: String, required: false},
    email: {type: String, required: true},
    totalPoints: {type: Number, required: false},
    feedback: {type: String, required: false},
    timestamp: {type: Date, default: getLocalTimestamp}
})

export const Record = model<IRecord, RecordType>('Record', recordSchema)