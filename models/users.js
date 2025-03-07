const mongoose = require("mongoose");

const usersScheme = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model("users", usersScheme);

module.exports = Users;
