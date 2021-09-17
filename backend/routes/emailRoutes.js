const express = require("express");
const router = express.Router();

const emailController = require("../controllers/email");

router.post("/email", emailController.email);

module.exports = router;
