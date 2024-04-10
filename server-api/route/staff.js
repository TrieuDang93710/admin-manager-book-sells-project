const staffController = require("../controller/staffController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", staffController.addStaff);

//GET ALL AUTHORS
router.get("/", staffController.getAllStaffs);

//GET AN AUTHOR
router.get("/:id", staffController.getAnStaff);

//UPDATE AN AUTHOR
router.put("/:id", staffController.updateStaff);

//DELETE AUTHOR
router.delete("/:id", staffController.deleteStaff);

module.exports = router;
