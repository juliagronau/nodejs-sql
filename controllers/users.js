const pool = require("../db/pg");

const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllUsers };
