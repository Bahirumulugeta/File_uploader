// AppError
const AppError = require("../../utils/appError");

// Config
const config = require("../../configs");

// Error for development environment
const sendDevError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    errorStack: err.stack,
  });
};

// Error for production environment
const sendProdError = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "ERROR",
      message: "Opps! Unknown error happened. Please try again",
    });
  }
};

// Error handler middleware
const geh = (err, req, res, next) => {
  // Error status and status code
  err.status = err.status || "ERROR";
  err.statusCode = err.statusCode || 500;

  // Duplicate record
  if (err.code === "23505") err = new AppError("Duplicate Record Found", 400);

  // Invalid data type
  if (err.code === "22007") err = new AppError("Invalid data type", 400);

  // Casting error
  if (err.name === "CastError") err = new AppError("Resource not found", 401);

  // Token invalid
  if (err.name === "JsonWebTokenError") err = new AppError("Please login", 401);

  // Token expired
  if (err.name === "TokenExpiredError") err = new AppError("Please login", 401);

  // Send development error for development environment
  if (config.env === "Development") sendDevError(err, res);

  // Send productin error for production environment
  if (config.env === "Production") sendProdError(err, res);
};

// Export geh
module.exports = geh;
