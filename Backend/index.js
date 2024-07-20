require("dotenv").config({ path: ".env.local" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Connect to MongoDB
const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("MongoDB URI is not defined in the environment variables");
  process.exit(1);
}

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  likes: { type: Number, default: 0 },
});

const Blog = mongoose.model("Blog", blogSchema);

// Routes
app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.patch("/blogs/:id/like", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    blog.likes += 1;
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
