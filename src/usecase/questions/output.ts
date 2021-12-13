import { question as questionDomain, sqliteFile } from "../../domain/questions";

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

const convertGetOutput = (
    questionData: questionDomain,
    sqlite: sqliteFile
): question => {
    return {
        ID: questionData.ID,
        title: questionData.title,
        classID: questionData.classID,
        sqliteBase64: sqlite.base64,
    };
};

export type { question, ListOutput };
export { convertListOutput, convertGetOutput };
