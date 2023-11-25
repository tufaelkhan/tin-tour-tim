import { Query, Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "please give your name"]
    },
    age: {
        type: Number,
        required: [true, 'please give your age'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'give your email'],
        lowercase: true,
        select: false
    },
    photo: String,
    role: {
        type:String,
        enum: ["user", "admin"],
        default: 'user',
        
    },
    userStatus: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
})

// pre hook for query middleware
userSchema.pre(/^find/, function(this: Query<IUser, Document>, next){
    this.find({userStatus: {$eq: "active"}})
    next()
})
// userSchema.pre('findOne', function(next){
//     this.find({userStatus: {$eq: "active"}})
//     next()
// })


const User = model<IUser>('User', userSchema);
export default User