const pool = require("../config/db");

exports.getAssignments = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM assignments ORDER BY id ASC",
    );

    res.json({
      success: true,
      assignments: result.rows,
    });
  } catch (error) {
    console.error("Assignment Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch assignments",
    });
  }
};
