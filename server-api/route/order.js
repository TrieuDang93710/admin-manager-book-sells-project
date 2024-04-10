const orderController = require("../controller/orderController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", orderController.addOrder);

//GET ALL AUTHORS
router.get("/", orderController.getAllOrder);

//GET AN AUTHOR
router.get("/:id", orderController.getOrder);

//UPDATE AN AUTHOR
router.put("/:id", orderController.updateOrder);

//DELETE AUTHOR
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
