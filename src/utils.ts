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
    console.log('Easy questions: ' + easyQuestions.length)

    const mediumQuestions =
        shuffleArray(questions.filter((q) => q.questionPoints === 400))
    console.log('Medium questions: ' + mediumQuestions.length)

    const hardQuestions =
        shuffleArray(questions.filter((q) => q.questionPoints === 800))
    console.log('Hard questions: ' + hardQuestions.length)

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
    console.log('Front questions: ' + frontQuestions.length)
    const backQuestions = getQuestionsByCategory(questions, 'BACKEND')
    console.log('Back questions: ' + backQuestions.length)

    return shuffleArray([
        ...getQuestionsByDifficulty(frontQuestions, 2, 4, 2),
        ...getQuestionsByDifficulty(backQuestions, 2, 4, 2)
    ])
}

export const shuffleAnswers = (questions: QuestionDocType[]) =>
    questions.forEach((q) => shuffleArray(q.questionAnswers))
