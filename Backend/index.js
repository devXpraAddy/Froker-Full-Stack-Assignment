const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  likes: { type: Number, default: 0 },
});

const Blog = mongoose.model("Blog", blogSchema);

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
});

app.post("/blogs/:id/like", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      blog.likes += 1;
      await blog.save();
      res.json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error liking blog", error });
  }
});

app.post("/blogs/:id/unlike", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      blog.likes -= 1;
      await blog.save();
      res.json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error unliking blog", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
