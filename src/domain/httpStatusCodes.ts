export default class HttpStatusCodes {
    // 順次追加する
    private readonly OK = 200;
    private readonly Created = 201;
    private readonly NoContent = 204;
    private readonly BadRequest = 400;
    private readonly Unauthorized = 401;
    private readonly Forbidden = 403;
    private readonly NotFound = 404;
    private readonly InternalServerError = 500;
    StatusOK(): number {
        return this.OK;
    }
    StatusCreated(): number {
        return this.Created;
    }
    StatusNoContent(): number {
        return this.NoContent;
    }
    StatusBadRequest(): number {
        return this.BadRequest;
    }
    StatusUnauthorized(): number {
        return this.Unauthorized;
    }
    StatusStatusForbidden(): number {
        return this.Forbidden;
    }
    StatusNotFound(): number {
        return this.NotFound;
    }
    StatusInternalServerError(): number {
        return this.InternalServerError;
    }
}
