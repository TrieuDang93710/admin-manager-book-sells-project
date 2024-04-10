const officeController = require("../controller/officeController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", officeController.addOffice);

//GET ALL OfficeS
router.get("/", officeController.getAllOffices);

//GET AN Office
router.get("/:id", officeController.getAnOffice);

//UPDATE AN Office
router.put("/:id", officeController.updateOffice);

//DELETE Office
router.delete("/:id", officeController.deleteOffice);

module.exports = router;
