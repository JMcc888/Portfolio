const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");

const connectDB = require('./config/connectDB')

// Load Config Variables
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'dist')))
connectDB();

const appRouter = require("./routes/appRoute")

app.use("/", appRouter)


app.listen(PORT, () => {
    console.log(`Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
  });