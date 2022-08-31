import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (requests, responses) => {
  return responses.send("Hi!");
};

const handleLogin = (requests, responses) => {
  return responses.send("Login here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(4000, handleListening);
