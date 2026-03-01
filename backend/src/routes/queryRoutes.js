const express = require("express");
const router = express.Router();

const { executeQuery } = require("../controllers/queryController");
const validateQuery = require("../middlewares/validateQuery");

router.post("/execute", validateQuery, executeQuery);

module.exports = router;
