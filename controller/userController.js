const User = require('../models/userModel');
const asyncHandler = require("express-async-handler")

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({email:email});
    if (!findUser){
        // creat a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else{
        throw new Error('User already exists')
        // user already exsits
    }
});



const loginUserController = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    // check if user exist or not
    const findUser = await User.findOne({email: email });
    if(findUser && await findUser.isPasswordMatched(password)){
        res.json(findUser);
    }else{
        throw new Error("Invalid credentials");
    }

})


module.exports = { createUser , loginUserController};