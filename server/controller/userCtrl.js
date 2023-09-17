const User = require("../models/User");

exports.signup = (req, res) => {
  const body = req.body;
  try {
    console.log(body)
    const user = new User(body);
    res.json({ user: user, message: "successful" });
  } catch (err) {
    res.json({
        error: err,
        message: "Not successful"
    })
  }
};
exports.regiterMember = (req, res) => {};
exports.login = (req, res) => {};
