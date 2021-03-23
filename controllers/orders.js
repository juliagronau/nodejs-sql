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

module.exports = { getAllOrders, getOrderById };
