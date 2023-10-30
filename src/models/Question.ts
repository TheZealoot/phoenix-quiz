import mongoose from "mongoose";

const {Schema} = mongoose

enum QuestionType {
    OPEN = 'open-ended',
    CLOSED = 'close-ended'
}

enum QuestionCategory {
    BACK = 'back-end',
    FRONT = 'front-end'
}

export interface IQuestion {
    questionName: string,
    questionAnswers: string[],
    questionCorrectAnswer: number,
    questionPoints: number,
    questionType: QuestionType,
    questionCategory: QuestionCategory
}

const QuestionSchema = new Schema<IQuestion>({
    questionName: {type: String, required: true},
    questionAnswers: {type: [String], required: true},
    questionCorrectAnswer: {type: Number, required: true},
    questionPoints: {Number: String, required: true},
    questionType: {
        type: String,
        enum: QuestionType,
        required: true
    },
    questionCategory: {
        type: String,
        enum: QuestionCategory,
        required: true
    }
})

mongoose.model<IQuestion>('Question', QuestionSchema)