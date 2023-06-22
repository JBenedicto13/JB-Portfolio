const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/connectDB");
const app = express();
const PORT = process.env.PORT;

//import routes
const worksRoutes = require("./routes/works");

app.use(express.json());
app.use(cors());

//define routes
app.use("/api/works", worksRoutes);

app.get("/", (req, res) => {
  res.send("Hello to jb-portfolio-server API");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});