const express = require('express');
const { createUser, getAllUsers, getUserById,userLogin } = require('../controllers/user.controller');
const auth = require('../middleware/auth');
const router = express.Router();
router.post("/login",userLogin)
router.post("/",createUser)
    router.get("/",auth,getAllUsers)
router.get("/:id",getUserById)

module.exports.userRouter = router;