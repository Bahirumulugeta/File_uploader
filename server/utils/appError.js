const AppError = function (message, statusCode) {
  Error.call(this, message);
  this.message = message;
  this.statusCode = statusCode;
  this.status = `${statusCode}`.startsWith("4") ? "FAIL" : "ERROR";
  this.isOperational = true;

  // capture the error stack trace
  Error.captureStackTrace(this, this.constructor);
};

// Export
module.exports = AppError;
