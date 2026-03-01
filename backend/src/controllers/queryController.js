const pool = require("../config/pg"); // keep this if your db file is pg.js

exports.executeQuery = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        success: false,
        error: "Query is required",
      });
    }

    // 🔐 Block dangerous queries
    const forbiddenKeywords = [
      "drop",
      "delete",
      "update",
      "alter",
      "truncate",
      "insert",
    ];

    const lowerQuery = query.toLowerCase();

    for (let keyword of forbiddenKeywords) {
      if (lowerQuery.includes(keyword)) {
        return res.status(400).json({
          success: false,
          error: "Only SELECT queries are allowed.",
        });
      }
    }

    // Execute safe query
    const result = await pool.query(query);

    res.json({
      success: true,
      rows: result.rows,
    });
  } catch (error) {
    console.error("Query Error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
