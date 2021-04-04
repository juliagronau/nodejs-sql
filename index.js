const express = require("express");
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
} = require("./controllers/users");
const {
  getAllOrders,
  getOrderById,
  createNewOrder,
  updateOrderById,
  deleteOrderById,
} = require("./controllers/orders");
const app = express();
const port = process.env.PORT || 3001;

// Enable body parsing for JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "<h1>This is an API for training purposes.</h1><h2>These are the available endpoints:</h2><p>To retrieve all users: /users</p><p>To retrieve a single user: /users/:id</p><p>To retrieve all orders: /orders</p><p>To retrieve a single order: /orders/:id</p>"
  );
});

app.route("/users").get(getAllUsers).post(createNewUser);

app
  .route("/users/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

app.route("/orders").get(getAllOrders).post(createNewOrder);

app
  .route("/orders/:id")
  .get(getOrderById)
  .put(updateOrderById)
  .delete(deleteOrderById);

app.listen(port, () => console.log(`Server running in port: ${port}`));
