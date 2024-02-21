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


TodosRouter.get("/byuserid", (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  res.status(StatusCodes.OK).send("Get Todo by user id");
});

// PUT REQUESTS
TodosRouter.put("/mark", (req, res) => {
  res.status(StatusCodes.OK).send("Todo als erledeigt markieren");
});
TodosRouter.put("/update", (req, res) => {
  res.status(StatusCodes.OK).send("Todo aktuallisieren");
});

TodosRouter.put("/mark", (req, res) => {
  const todoId = req.body.todoId;
  if (!todoId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  res.status(StatusCodes.OK).send("Todo als erledigt markieren");
});

TodosRouter.put("/update", (req, res) => {
  const todoId = req.body.todoId;
  const updatedTodo = req.body.updatedTodo;
  if (!todoId || !updatedTodo) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  res.status(StatusCodes.OK).send("Todo aktualisieren");
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

TodosRouter.delete("/delete", (req, res) => {
  const todoId = req.query.todoId;
  if (!todoId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  res.status(StatusCodes.OK).send("DELETE Todo");
});

module.exports = { TodosRouter };
