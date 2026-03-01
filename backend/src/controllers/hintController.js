const fetch = require("node-fetch");

exports.getHint = async (req, res) => {
  try {
    const { userQuery, assignmentId } = req.body;

    if (!userQuery) {
      return res.status(400).json({
        success: false,
        error: "Query is required",
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
You are a SQL tutor.

Assignment ID: ${assignmentId}
Student Query: ${userQuery}

Give ONLY a helpful hint.
Do NOT give the full SQL solution.
Keep it short and educational.
`,
                },
              ],
            },
          ],
        }),
      },
    );

    const data = await response.json();

    const hint =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No hint generated.";

    res.json({
      success: true,
      hint,
    });
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to generate hint",
    });
  }
};
