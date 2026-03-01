require("dotenv").config();
const express = require("express");
const cors = require("cors");

const queryRoutes = require("./routes/queryRoutes");
const hintRoutes = require("./routes/hintRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const connectMongo = require("./config/mongo");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/query", queryRoutes);
app.use("/api/hint", hintRoutes);
app.use("/api/assignments", assignmentRoutes);

app.get("/", (req, res) => {
  res.send("CipherSQLStudio Backend Running");
});



(async () => {
  await connectMongo();

  const PORT = 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
