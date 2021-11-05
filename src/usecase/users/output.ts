import {User} from "@prisma/client"
import {user as userDomain} from "../../domain/users";

export type user = {
    ID: number
    email: string
    name: string | null
}

export type ListOutput = {
    users: user[]
}

export function convertGetOutput(input: userDomain):user{
    return {
        ID: input.ID,
        name: input.name,
        email: input.email
    }
}

export function convertListOutput(input: userDomain[]): ListOutput {
    let output: ListOutput;
    output = {
        users: []
    };
    for (const i of input) {
        output.users.push(convertGetOutput(i))
    }
    return output;
}
