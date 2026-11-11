const { Router } = require('express');

const snackController = require('../controllers/snacks');

const snackRouter = Router();

snackRouter.get("/", snackController.index);
snackRouter.get("/id", snackController.show);
snackRouter.get("/top", snackController.getTop);
snackRouter.post("/", snackController.create);
api.delete("/:id", snackController.destroy);

module.exports = snackRouter;
