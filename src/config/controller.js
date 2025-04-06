const AdminConfig = require("./model");

const getConfig = async (req, res) => {
  const config = await AdminConfig.findOne();
  res.send(config || { page2: ["aboutMe"], page3: ["address"] });
};

const setConfig = async (req, res) => {
  await AdminConfig.deleteMany();
  const config = new AdminConfig(req.body);
  await config.save();
  res.status(201).send(config);
};

module.exports = {
  getConfig,
  setConfig,
};
