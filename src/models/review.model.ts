import  { Query, Schema, model} from "mongoose";
import { IReview, IReviewModel } from "../interfaces/review.interface";
import Tour from "./tour.model";

const reviewSchema = new Schema<IReview, IReviewModel>({
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

reviewSchema.index({tour: 1, user: 1}, {unique: true})

reviewSchema.pre(/^find/, function(this: Query<IReview, Document>, next){
    this.find()
    next()
})

reviewSchema.statics.calculateAverageRating = async function (tourId: Schema.Types.ObjectId) {
    
    const stats = await this.aggregate([
        {
            $match: { tour: tourId}
        },
        {
            $group: {
                _id: "$tour",
                numberOfRatings: {$sum: 1},
                avgRating: {$avg: "$rating"}
            }
        }
    ])
    if(stats.length > 0){
        await Tour.findByIdAndUpdate(tourId, {
            ratingAverage: stats[0].numberOfRatings,
            ratingQuantity: stats[0].avgRating
        })
    }else{
        await Tour.findByIdAndUpdate(tourId, {
            ratingAverage: 0,
            ratingQuantity: 0
        })
    }
}


const Review = model<IReview, IReviewModel>('Review', reviewSchema)
export default Review

