const supplierController = require("../controller/supplierController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", supplierController.addSupplier);

//GET ALL AUTHORS
router.get("/", supplierController.getAllSuppliers);

//GET AN AUTHOR
router.get("/:id", supplierController.getAnSupplier);

//UPDATE AN AUTHOR
router.put("/:id", supplierController.updateSupplier);

//DELETE AUTHOR
router.delete("/:id", supplierController.deleteSupplier);

module.exports = router;
