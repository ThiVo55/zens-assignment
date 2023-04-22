const router = require("express").Router();
const { findJokes } = require("./jokes.controller");

router.get("/get-jokes", findJokes);

module.exports = router;
