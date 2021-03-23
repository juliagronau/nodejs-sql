const express = require("express");
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
} = require("./controllers/users");
const app = express();
const port = process.env.PORT || 3001;

// Enable body parsing for JSON
app.use(express.json());

app.route("/users").get(getAllUsers).post(createNewUser);

app.route("/users/:id").get(getUserById).put(updateUserById);

app.listen(port, () => console.log(`Server running in port: ${port}`));
