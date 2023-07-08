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
  res.send("Welcome to jb-portfolio-server API");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });