const statusController = require("../controller/statusController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", statusController.addStatus);

//GET ALL AUTHORS
router.get("/", statusController.getAllStatus);

//GET AN AUTHOR
router.get("/:id", statusController.getAnStatus);

//UPDATE AN AUTHOR
router.put("/:id", statusController.updateStatus);

//DELETE AUTHOR
router.delete("/:id", statusController.deleteStatus);

module.exports = router;
