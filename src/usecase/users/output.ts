import { user as userDomain } from "../../domain/users";

export type user = {
    ID: number;
    email: string;
};

export type ListOutput = {
    users: user[];
};

export function convertGetOutput(input: userDomain): user {
    return {
        ID: input.ID,
        email: input.email,
    };
}

export function convertListOutput(input: userDomain[]): ListOutput {
    const output: ListOutput = {
        users: [],
    };
    for (const i of input) {
        output.users.push(convertGetOutput(i));
    }
    return output;
}
