import http from "node:http";

const server = http.createServer((request, response) => {
  return response.writeHead(404).end();
});

server.listen(3333);
