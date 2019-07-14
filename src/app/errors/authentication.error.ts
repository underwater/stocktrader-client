export class AuthenticationError extends Error {
    claim: string = "";
    type: string = "AuthenticationError";

    constructor(message: string, claim: string = null) {
        super(message);
        this.claim = claim;
    }
}
