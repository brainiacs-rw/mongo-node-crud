const express = require('express');
const { createUser, getAllUsers, getUserById } = require('../controllers/user.controller');
const router = express.Router();
router.post("/",createUser)
router.get("/",getAllUsers)
router.get("/:id",getUserById)
module.exports.userRouter = router;