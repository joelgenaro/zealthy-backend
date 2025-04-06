require("dotenv").config();

const userController = require("./user/controller");
const configController = require("./config/controller");
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 100000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.post("/api/users", userController.addUser);
app.get("/api/users", userController.getUsers);

app.get("/api/admin-config", configController.getConfig);
app.post("/api/admin-config", configController.setConfig);

app.listen(process.env.PORT, () => console.log("Server running"));
