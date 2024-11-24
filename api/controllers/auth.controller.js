import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import errorHandler from "../utiles/error.js"
import jwt from "jsonwebtoken"

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

export const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(401, "Wrong Credentials"));

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Wrong Credentials"));

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...otherThanPassword } = validUser._doc;

        const expiryDate = new Date(Date.now() + 3600000) // for 1 hour
        res
            .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
            .status(200)
            .json(otherThanPassword);

    } catch (error) {
        next(error)
    }
}