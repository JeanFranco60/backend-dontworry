const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const checkJwt = require("../middleware/checkJwt"); 
const isAdmin = require("../middleware/isAdmin");    


router.get("/", checkJwt, isAdmin, userController.index); 

router.get("/:id", checkJwt, userController.show);

router.post("/", userController.store);

router.post("/validate", userController.validateUser);

router.put("/:id", checkJwt, isAdmin, userController.update);

router.delete("/:id", checkJwt, isAdmin, userController.destroy);

module.exports = router;
