import { Schema, model} from "mongoose";
import { IReview } from "../interfaces/review.interface";

const reviewSchema = new Schema<IReview>({
    review: {
        type: String,
        required: [true, 'give a review'],
    },
    rating: {
        type: Number,
        required: [true, 'give us a rating']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    tour: {
        type: Schema.Types.ObjectId,
        ref: "Tour",
        required: [true, 'please tell us your tour destination']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'tell the user']
    },
    
})

const Review = model<IReview>('Review', reviewSchema)
export default Review

