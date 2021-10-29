import {User} from "@prisma/client"

export type user = {
    ID: number
    email: string
    name: string | null
}

export type ListOutput = {
    users: user[]
}

export function convertGetOutput(input: User):user{
    return {
        ID: input.id,
        name: input.name,
        email: input.email
    }
}

export function convertListOutput(input: User[]): ListOutput {
    let output: ListOutput;
    output = {
        users: []
    };
    for (const i of input) {
        output.users.push(convertGetOutput(i))
    }
    return output;
}
