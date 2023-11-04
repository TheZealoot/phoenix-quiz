import {Document, Model, model, Schema, Types} from "mongoose";

export interface IAnswer {
    id: number,
    answer: string
}

export interface IQuestion {
    questionName: string,
    questionAnswers: IAnswer[],
    questionCorrectAnswer: number,
    questionPoints: number,
    questionCategory: string
}

export type QuestionModel = Model<IQuestion>;

export type QuestionDocType = Document<unknown, {}, IQuestion> & IQuestion & { _id: Types.ObjectId }

const questionSchema = new Schema<IQuestion, QuestionModel>({
    questionName: {type: String, required: true},
    questionAnswers: {type: [{id: Number, answer: String}], required: true},
    questionCorrectAnswer: {type: Number, required: true},
    questionPoints: {type: Number, required: true},
    questionCategory: {type: String, required: true},
})

export const Question = model<IQuestion, QuestionModel>('Question', questionSchema)