export class AuthError extends Error {
  constructor(message, stausCode) {
    super(message);
    this.name = "AuthError";
    this.errorCode = stausCode
  }
}
