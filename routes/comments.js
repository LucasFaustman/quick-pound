const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now


router.post("/createComment/:postId/:userName", commentsController.createComment);
router.put("/likeComment/:commentId/:postId", commentsController.likeComment);


module.exports = router;
