const pool = require("../db/pg");

const getAllOrders = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM orders");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM orders WHERE id=$1;", [id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createNewOrder = async (req, res) => {
  try {
    const { price, date, user_id } = req.body;
    const result = await pool.query(
      "INSERT INTO orders (price, date, user_id) values ($1, $2, $3) RETURNING *;",
      [price, date, user_id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const { price, date, user_id } = req.body;
    const result = await pool.query(
      "UPDATE orders SET price=$1, date=$2, user_id=$3 WHERE id=$4 RETURNING *;",
      [price, date, user_id, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM orders WHERE id=$1;", [id]);
    res.json({ message: "Order has been deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createNewOrder,
  updateOrderById,
  deleteOrderById,
};
