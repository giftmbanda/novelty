const statusRoute = require('express').Router();
const statusController = require('../Controllers/statusController');

statusRoute.get("/:id", async (req, res) => {
  let result = await statusController.getIdeaStatus(req.params);
  res.status(result.status).send(result);
});

statusRoute.get("/", async (req, res) => {
  let result = await statusController.getAllStatus()
  res.status(result.status).send(result);
});

statusRoute.post("/update", async (req, res) => {
  let result = await statusController.updateStatus(req.body);
  res.status(result.status).send(result);
});
module.exports = statusRoute;