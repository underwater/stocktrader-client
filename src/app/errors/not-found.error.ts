export class NotFoundError extends Error {
    type: string = "NotFoundError";

    constructor(message = "Requested resource was not found") {
        super(message);
    }
}
