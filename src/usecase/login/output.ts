import { jwtOutput as jwtDomain } from "../../domain/authenticator";

export type jwt = {
    token: string;
};

export const convertLoginUsecaseOutput = (input: jwtDomain): jwt => {
    return {
        token: input.token,
    };
};
