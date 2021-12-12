import { question as questionDomain } from "../../domain/questions";

type question = {
    ID: number;
    title: string;
    classID: number;
    sqliteBase64: string;
};

type questionForList = {
    ID: number;
    title: string;
};

type ListOutput = {
    questions: questionForList[];
};

const convertGetOutputForList = (input: questionDomain): questionForList => {
    return {
        ID: input.ID,
        title: input.title,
    };
};

const convertListOutput = (input: questionDomain[]): ListOutput => {
    const output: ListOutput = {
        questions: [],
    };
    for (const question of input) {
        output.questions.push(convertGetOutputForList(question));
    }
    return output;
};

export type { question, ListOutput };
export { convertListOutput };
