const express = require("express");
const cors = require("cors");

// Zugriff auf Umgebungsvariablen
const { PORT } = process.env;

// Initialisierung von expres
const app = express();
// Use for development
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  res.json({ profile: { name: "Max" } });
});

app.get('/user', (req, res) => {
  const userData = {
    firstName: "Kevin",
    lastName: "Losem",
    address: "Trift 17",
    hobbies: ["Lesen", "coden", "familie"]
  };
  res.json(userData);
});

app.get('/todos', (req, res) => {
  const todos = [
    { id: 1, task: "Hausaufgaben", done: false },
    { id: 2, task: "Aufräumen", done: true }
  ];
  res.json(todos);
});


// App hört im folgenden auf den Port, welcher über die Umgebungsvariable definiert ist
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
