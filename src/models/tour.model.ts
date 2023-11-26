import { Query, Schema, model } from "mongoose";
import { ITour, ITourMethods, TTourModel } from "../interfaces/tour.interface";
import slugify from 'slugify'

const tourSchema = new Schema<ITour, TTourModel, ITourMethods >({
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
}, {
    toJSON: {virtuals: true}, 
    toObject: {virtuals: true}
})

tourSchema.virtual("durationDays").get(function (){
    return this.duration / 24
})



// pre hook for query middleware
tourSchema.pre(/^find/, function(this: Query<ITour, Document>, next){
    this.find()
    next()
})
// userSchema.pre('findOne', function(next){
//     this.find({userStatus: {$eq: "active"}})
//     next()
// })
tourSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true})
    next()
})

tourSchema.methods.getNextNearestStartAndEndDate = function(): {
        nextStartDate: Date | null
        estimatedEndDate: Date | null
    }{
    const today = new Date()
    const futureDate = this.startDates.filter((startDate: Date) =>{
        return startDate > today
    })
    futureDate.sort((a:Date, b:Date) => a.getTime() - b.getTime())
    const nextStartDate = futureDate[0]
    const estimatedEndDate = new Date(
        nextStartDate.getTime() + this.duration * 60 * 60 * 1000,
    )
    return {
         nextStartDate,
        estimatedEndDate
    }
}

const Tour = model<ITour, TTourModel>('Tour', tourSchema);
export default Tour