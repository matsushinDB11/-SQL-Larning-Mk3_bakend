export type GetInput = {
    userID: number;
};

export type AddInput = {
    name: string;
    email: string;
};

export type UpdateInput = {
    userID: number;
    name: string | undefined;
    email: string | undefined;
};

export type DeleteInput = {
    userID: number;
};
