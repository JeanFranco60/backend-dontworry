const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// const isAdmin = require("../middlewares/isAdmin");
// const checkjwt = require("../middlewares/checkjwt");

router.post("/", userController.store);

// router.use(checkjwt);
router.get("/:id", userController.show);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

// router.use(isAdmin);
router.get("/", userController.index);

module.exports = router;
