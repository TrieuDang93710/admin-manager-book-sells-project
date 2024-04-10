const kindController = require("../controller/kindController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", kindController.addKind);

//GET ALL AUTHORS
router.get("/", kindController.getAllKinds);

//GET AN AUTHOR
router.get("/:id", kindController.getAnKind);

//UPDATE AN AUTHOR
router.put("/:id", kindController.updateKind);

//DELETE AUTHOR
router.delete("/:id", kindController.deleteKind);

module.exports = router;
