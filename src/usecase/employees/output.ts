import { employee as domainEmployee } from "../../domain/employees/repository";

type employee = {
    ID: number;
    name: string;
    height: number;
    email: string;
    weight: number;
    membershipYear: number;
    birthday: string;
    bloodType: string;
};

export type ListOutput = {
    employees: employee[];
};

function convertGetOutput(input: domainEmployee): employee {
    return {
        ID: input.ID,
        name: input.name,
        height: input.height,
        email: input.email,
        weight: input.weight,
        membershipYear: input.membershipYear,
        birthday: input.birthday,
        bloodType: input.bloodType,
    };
}

export function convertListOutput(input: domainEmployee[]): ListOutput {
    const output: ListOutput = {
        employees: [],
    };
    for (const i of input) {
        output.employees.push(convertGetOutput(i));
    }
    return output;
}
