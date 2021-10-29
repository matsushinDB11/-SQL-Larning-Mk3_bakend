class resourceNotFoundError extends Error {
    private readonly resource: string;
    constructor(resource: string) {
        super();
        this.resource = resource;
    }
    CatError = () => {
        return this.resource + "not found"
    }
}
