// Http
const http = require("http");

// Config file
const config = require("../configs");

// const
// App
const app = require("./app");
const db = require("./model");

module.exports = () => {
  // Create server
  const server = http.createServer(app);

  // Port
  const port = config.port;

  // Start the server
  server.listen(port, console.log("Server listening on port ", port));

  // Majestic close
  process.on("SIGINT", () => {
    server.close(() => {
      console.log("App closing");
      db.end();
    });
  });
};
