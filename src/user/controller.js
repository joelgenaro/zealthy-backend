const User = require("./model");

const addUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
};

const getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

module.exports = {
  addUser,
  getUsers,
};
