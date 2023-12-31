import {QuestionDocType} from "./models/question";

export const getLocalTimestamp = () => {
    const timestampUTC = Date.now();

    const offsetMinutes = new Date().getTimezoneOffset();

    const offsetMilliseconds = offsetMinutes * 60 * 1000;

    return timestampUTC - offsetMilliseconds;
}

export const shuffleArray = <T>(array: T[]) => {
    let currentIndex = array.length

    while (currentIndex > 0) {

        const randomIndex = Math.floor(Math.random() * currentIndex)

        currentIndex--

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array;
}

export const getQuestionsByDifficulty = (questions: QuestionDocType[], easy: number, medium: number, hard: number) => {
    const easyQuestions =
        shuffleArray(questions.filter((q) => q.questionPoints === 200))

    const mediumQuestions =
        shuffleArray(questions.filter((q) => q.questionPoints === 400))

    const hardQuestions =
        shuffleArray(questions.filter((q) => q.questionPoints === 800))

    return [
        ...easyQuestions.slice(0, easy),
        ...mediumQuestions.slice(0, medium),
        ...hardQuestions.slice(0, hard)
    ] as QuestionDocType[]
}

export const getQuestionsByCategory = (questions: QuestionDocType[], category: string) =>
    questions.filter((q) => q.questionCategory === category)

export const getQuestions = (questions: QuestionDocType[]): QuestionDocType[] => {
    const frontQuestions = getQuestionsByCategory(questions, 'FRONTEND')
    const backQuestions = getQuestionsByCategory(questions, 'BACKEND')

    return shuffleArray([
        ...getQuestionsByDifficulty(frontQuestions, 2, 4, 2),
        ...getQuestionsByDifficulty(backQuestions, 2, 4, 2)
    ])
}

export const shuffleAnswers = (questions: QuestionDocType[]) =>
    questions.forEach((q) => shuffleArray(q.questionAnswers))
