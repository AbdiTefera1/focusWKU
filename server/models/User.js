const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  department: String,
  phoneNumber: Number,
  year: String,
  userPicture: String,
  CGPA: String,
  medalia: String,
  tag: String,
  id: String,
});

const User = model("User", userSchema);

module.exports = User;
