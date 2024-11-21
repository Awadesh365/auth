import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });

    console.log(hashedPassword);

    try {
        await newUser.save();
        res.status(201).json({ message: "user created Sucessfully" });
    } catch (error) {
        next(error);
    }
}

export const signIn = (req, res) => {
    res.json({
        "message": "This is SignIn Controller",
        "POST": "This is Post Method"
    })
}