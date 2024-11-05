import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });
// each user will have a seperate thing as time or creation and time of updation, and the timestamps: true does this for us.


const User = mongoose.model("User", userSchema);

export default User;