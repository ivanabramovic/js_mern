const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json({ extended: false }));

connectDB();

const PORT = process.env.PORT || 5000;

//app.get("/", (req, res) => res.send("API running"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//routes
app.use("/user", require("./routes/user"));
app.use("/spirits", require("./routes/spirits"));
