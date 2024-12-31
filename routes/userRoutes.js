// const express = require("express");
// const userController = require("../controllers/userController");
// const router = express.Router();

// const checkjwt = require("../middleware/checkJwt");
// const isAdmin = require("../middleware/isAdmin");

// router.post("/", userController.store);

// router.use(checkjwt);

// router.get("/:id", userController.show);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);

// router.use(isAdmin);
// router.get("/", userController.index);

// module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/validate", userController.validateUser);

module.exports = router;
