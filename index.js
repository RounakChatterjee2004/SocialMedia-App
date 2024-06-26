const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

dotenv.config();

async function main() {
  try {
    console.log("Connecting to MongoDB with URI:", process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
  }
}

main();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
