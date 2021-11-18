export type GetInput = {
    userID: number;
};

export type AddInput = {
    email: string;
    isAdmin: boolean | undefined;
};

export type UpdateInput = {
    userID: number;
    email: string;
    isAdmin: boolean | undefined;
};

export type DeleteInput = {
    userID: number;
};
