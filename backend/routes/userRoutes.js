const express = require("express");
const authmiddlewares = require("../middlewares/authMiddlewares");
const authController = require("../controllers/authController");
const consumerController = require("../controllers/consumerController");
const professionalController = require("../controllers/professionalController");

const router = express.Router();

//Auth routes
router.post("/signup", authController.signUser);
router.post("/login", authController.login);

//All routes after this middleware are protected
router.use(authmiddlewares.protectRoute);

//Consumer Routes
router.route("/consumers").get(consumerController.getAllConsumers);

//Professional Routes
router.route("/professionals").get(professionalController.getAllProfessionals);

module.exports = router;
