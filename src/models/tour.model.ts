import { Query, Schema, model } from "mongoose";
import { ITour } from "../interfaces/tour.interface";

const tourSchema = new Schema<ITour>({
    name: {
        type: String,
        required: [true, "please give tour name"]
    },
    duration: {
        type: Number,
        required: [true, 'please give tour duration'],
    },
    ratingAverage: {
        type: Number,
        default: 0
    },
    ratingQuantity: {
        type: Number,
        default: 0,
    },
    price: {
        type:Number, 
        required: [true, "please tell us your price"]
    },
    imageCover: {
        type: String,
        required: [true, "please give us your image cover"]
    },
    images: [ String ],
    createdAt: Date,
    startDates: [Date],
    startLocation: {
        type: String,
        required: [true, 'tell us your start location']
    },
    locations: [String],
    slug: String,
})

// pre hook for query middleware
tourSchema.pre(/^find/, function(this: Query<ITour, Document>, next){
    this.find({userStatus: {$eq: "active"}})
    next()
})
// userSchema.pre('findOne', function(next){
//     this.find({userStatus: {$eq: "active"}})
//     next()
// })


const Tour = model<ITour>('Tour', tourSchema);
export default Tour