import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const login = (requests, responses, next) => {
  console.log(`${requests.method} ${requests.url}`);
  next();
};

const handleHome = (requests, responses) => {
  return responses.send("Hi!");
};

app.use(logger);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
