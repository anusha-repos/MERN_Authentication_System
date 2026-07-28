const dotenv = require('dotenv')
dotenv.config()

const authMiddleware = require('./middleware/authMiddleware')
const express = require("express")
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('mongoDB connected')
}).catch((err)=>{
    console.log("mongoDB not connected")
})

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

const User = mongoose.model("User",userSchema);

app.post("/signup", async (req, res) => {

    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Please enter username and password"
            });
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).json({
                message: "Username already exists"
            });
        }

        const hashedpwd = await bcrypt.hash(password, 10);

        await User.create({
            username,
            password: hashedpwd
        });

        res.status(201).json({
            message: "User created successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

});

app.get("/", (req, res) => {
    res.send("Backend is running ");
});

app.post("/login", async (req, res) => {

    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Please enter username and password"
            });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        const token = jwt.sign(
            {
                username: user.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            message: "Login Successful",
            token
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

});

app.get("/profile", authMiddleware, (req, res) => {

    res.status(200).json({

        message: "Profile fetched successfully",

        username: req.user.username

    });

});

app.get("/dashboard",authMiddleware,(req,res)=>{
    res.send("dashborad route")
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});