const express = require('express');
const { followUser, allFollower, profile, me, friends, createPost, getAllPost, userPost, likePost, commentPost, find, sendMessage, getAllMessage } = require('../controllers/userController');
const globalAccess = require('../middlewares/auth');
const { upload } = require('../middlewares/multer');
const router = express.Router();
router.post("/follow/:id", globalAccess, followUser);
router.get("/allFollower", globalAccess, allFollower);
router.get("/me/:id", globalAccess, me);
router.get("/profile/:id", globalAccess, profile);
router.get("/friends", globalAccess, friends);
router.post("/createpost", upload.any(), globalAccess, createPost);
router.get('/getAllPost', globalAccess, getAllPost);
router.get('/userPost', globalAccess, userPost);
router.post('/like/post/:post_id', globalAccess, likePost);
router.post('/comment/post/:post_id', globalAccess, commentPost)
router.post('/find', globalAccess, find)
router.post('/sendMessage', globalAccess, sendMessage);
router.post('/getAllMessage', globalAccess, getAllMessage);
module.exports = router;