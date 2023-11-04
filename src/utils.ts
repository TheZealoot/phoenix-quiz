import {IQuestion} from "./models/question";

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

export const getQuestionsByDifficulty = (questions: IQuestion[], easy: number, medium: number, hard: number) => {
    const easyQuestions =
        shuffleArray(questions.filter((q) => q.questionPoints === 200))

    const mediumQuestions = questions
    shuffleArray(questions.filter((q) => q.questionPoints === 400))

    const hardQuestions = questions
    shuffleArray(questions.filter((q) => q.questionPoints === 800))

    return [
        ...easyQuestions.slice(0, easy),
        ...mediumQuestions.slice(0, medium),
        ...hardQuestions.slice(0, hard)
    ]
}

export const getQuestionsByCategory = (questions: IQuestion[], category: string) =>
    questions.filter((q) => q.questionCategory === category)

export const getQuestions = (questions: IQuestion[]) => {
    const frontQuestions = getQuestionsByCategory(questions, 'FRONTEND')
    const backQuestions = getQuestionsByCategory(questions, 'BACKEND')

    return shuffleArray([
        ...getQuestionsByDifficulty(frontQuestions, 2, 4, 2),
        ...getQuestionsByDifficulty(backQuestions, 2, 4, 2)
    ])
}

export const shuffleAnswers = (questions: IQuestion[]) =>
    questions.map<IQuestion>((q) => {
        const answers = shuffleArray(q.questionAnswers)

        return {
            ...q,
            questionAnswers: answers
        }
    })