var express = require("express");
var router = express.Router();
var checkBody = require("../modules/checkBody");
var Users = require("../models/users");

function errorMessage(msg) {
  return { result: false, error: msg };
}

const keyToCheck = ["email", "password"];

router.post("/signup", async (req, res) => {
  if (!checkBody(req.body, keyToCheck)) {
    res.json(errorMessage("Missing or empty fields"));
    return;
  }
  let exists = await Users.findOne({
    mail: req.body.mail,
    password: req.body.password,
  });
  if (exists) {
    res.json(errorMessage("User already exists"));
    return;
  }
  let newUser = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save();
  res.json({ result: true });
});

router.post("/signin", async (req, res) => {
  if (!checkBody(req.body, keyToCheck)) {
    res.json(errorMessage("Missing or empty fields"));
    return;
  }
  let user = await Users.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    res.json(errorMessage("User not found"));
    return;
  }
  res.json({ result: true });
});

module.exports = router;
