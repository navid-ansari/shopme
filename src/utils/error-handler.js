export class InputError extends Error {
 status;
 message;
 constructor(message) {
  super(message);
  this.status = 400;
  this.message = message;
 }
}

export class AuthenticationError extends Error {
 status;
 message;
 constructor(message) {
  super(message);
  this.status = 401;
  this.message = message;
 }
}

export class ForbiddenError extends Error {
 status;
 message;
 constructor(message) {
  super(message);
  this.status = 403;
  this.message = message;
 }
}

export class NotFoundError extends Error {
 status;
 message;
 constructor(message) {
  super(message);
  this.status = 404;
  this.message = message;
 }
}

export class BadResponseError extends Error {
 status;
 message;
 constructor(message) {
  super(message);
  this.status = 502;
  this.message = message;
 }
}
