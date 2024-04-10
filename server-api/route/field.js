const fieldController = require("../controller/fieldController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", fieldController.addField);

//GET ALL AUTHORS
router.get("/", fieldController.getAllFields);

//GET AN AUTHOR
router.get("/:id", fieldController.getAnField);

//UPDATE AN AUTHOR
router.put("/:id", fieldController.updateField);

//DELETE AUTHOR
router.delete("/:id", fieldController.deleteField);

module.exports = router;
