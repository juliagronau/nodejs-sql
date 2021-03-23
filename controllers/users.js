const pool = require("../db/pg");

const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE id=$1;", [id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllUsers, getUserById };
