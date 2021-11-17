export class resourceNotFoundError extends Error {
    message: string;
    name: string;
    constructor(resource: string) {
        super();
        this.message = resource;
        this.name = "resourceNotFoundError";
    }
}

export class DBInternalError extends Error {
    message: string;
    name: string;
    constructor(operation: string) {
        super();
        this.message = operation;
        this.name = "DBInternalError";
    }
}
