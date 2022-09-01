import express from "express";

const PORT = 4000;

const app = express();

const logger = (requests, responses, next) => {
  console.log(`${requests.method} ${requests.url}`);
  next();
};

const handleHome = (requests, responses) => {
  return responses.send("Hi!");
};

app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
