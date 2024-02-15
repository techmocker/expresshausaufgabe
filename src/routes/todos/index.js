const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const TodosRouter = Router();

// GET REQUESTS
// /v1/todos/byid
TodosRouter.get("/byid", (req, res) => {
  const todoId = req.query.todoId;
  if (!todoId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  res.status(StatusCodes.OK).send("Get Todo by id");
});

TodosRouter.post("/byuserid", (req, res) => {
  res.status(StatusCodes.OK).send("Get Todo by user id");
});

TodosRouter.get("/all", (req, res) => {
  res.status(StatusCodes.OK).json(todos); // Annahme: todos ist dein Array mit Todos
});

// PUT REQUESTS
TodosRouter.put("/mark", (req, res) => {
  res.status(StatusCodes.OK).send("Todo als erledeigt markieren");
});
TodosRouter.put("/update", (req, res) => {
  res.status(StatusCodes.OK).send("Todo aktuallisieren");
});

// POST REQUESTS
TodosRouter.post("/create", (req, res) => {
  res.status(StatusCodes.OK).send("Erstellen eines Todos");
});

TodosRouter.post("/todo", (req, res) => {
  const newTodo = req.body; 
  res.status(StatusCodes.CREATED).json(newTodo);
});

// DELETE REQUEST
TodosRouter.delete("/delete", (req, res) => {
  res.status(StatusCodes.OK).send("DELTE Todo");
});

module.exports = { TodosRouter };
