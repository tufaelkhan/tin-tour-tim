import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "please give your name"]
    },
    age: {
        type: Number,
        required: [true, 'please give your age']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'give your email'],
        lowercase: true,
    },
    photo: String,
    role: {
        type:String,
        enum: ["user", "admin"],
        default: 'user'
    },
    userStatus: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
})

userSchema.pre('find', function(next){
    
    next()
})

const User = model<IUser>('User', userSchema);
export default User