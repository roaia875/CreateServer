//שותפות: רואיה חבשה ,רואן חבשה

const http = require("http");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/templates");

const file2Send = fs.readFileSync(`${dirPath}/page.html`);
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(file2Send);
});

server.listen(3001, () => {
  console.log("Server working on port 3001");
});
