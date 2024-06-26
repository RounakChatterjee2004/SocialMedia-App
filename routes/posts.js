const router = require("express").Router();
const post = require("../models/Posts");

// create post
router.post("/", async (req, res) => {
  const newPost = new post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

//update a post

router.put("/:id", async (req, res) => {
  try {
    const post = await post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated");
    } else {
      res.status(403).json("You can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//like & dislike a post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await post.findById(req.params.id);

    // the user will like the post he has not liked the post till now
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    }

    // the user has already lliked the post he wants to unlike
    else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
