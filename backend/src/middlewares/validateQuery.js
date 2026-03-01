module.exports = function validateQuery(req, res, next) {
  const { query } = req.body;

  const forbidden = /\b(INSERT|UPDATE|DELETE|DROP|ALTER|TRUNCATE)\b/i;

  if (forbidden.test(query)) {
    return res.status(400).json({
      error: "Only SELECT queries are allowed.",
    });
  }

  next();
};
