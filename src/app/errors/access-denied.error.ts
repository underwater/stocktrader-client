export class AccessDeniedError extends Error {
    type: string = "AccessDeniedError";

    constructor(message: string) {
        super(message);
    }
}
