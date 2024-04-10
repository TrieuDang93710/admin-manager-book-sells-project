const buyerController = require("../controller/buyerController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", buyerController.addBuyer);

//GET ALL AUTHORS
router.get("/", buyerController.getAllBuyers);

//GET AN AUTHOR
router.get("/:id", buyerController.getAnBuyer);

//UPDATE AN AUTHOR
router.put("/:id", buyerController.updateBuyer);

//DELETE AUTHOR
router.delete("/:id", buyerController.deleteBuyer);

module.exports = router;
