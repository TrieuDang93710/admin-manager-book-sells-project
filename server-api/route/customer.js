const customerController = require("../controller/customerController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", customerController.addCustomer);

//GET ALL AUTHORS
router.get("/", customerController.getAllCustomers);

//GET AN AUTHOR
router.get("/:id", customerController.getAnCustomer);

//UPDATE AN AUTHOR
router.put("/:id", customerController.updateCustomer);

//DELETE AUTHOR
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
