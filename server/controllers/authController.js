const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/Users");

const login = async (req, res) => {
    try {
        //establish the user credentials
        const {email, password } = req.body;

        //find the user
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        //check password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        //create jwt
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        //send token to the client
        res.json({
            success: true,
            message: "Login Successful",
            token: token
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports = { login };