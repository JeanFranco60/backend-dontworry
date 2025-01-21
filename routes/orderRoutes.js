const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const isAdmin = require("../middleware/isAdmin");
const checkjwt = require("../middleware/checkJwt");

router.use(checkjwt);

router.post("/", orderController.store);
router.get("/myOrders", orderController.showMyOrders);
router.use(isAdmin);
router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.patch("/:id", orderController.update);
router.delete("/:id", orderController.destroy);

module.exports = router;
