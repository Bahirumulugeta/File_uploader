// Express
const express = require("express");

// User router
const fileRouter = require("../api/file/router");


// Global error handler
const geh = require("../api/geh");

// App
const app = express();

// Compression
const compression = require("compression");

// Third party middlewares
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/upload_file", fileRouter);

// Use global error handler
app.use(geh);

// Export app
module.exports = app;
