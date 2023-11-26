import { IReview } from '../interfaces/review.interface'
import Review from '../models/review.model'


const createReview = async(userData: IReview): Promise<IReview> => {
  const result = await Review.create(userData)
  return result
}

const getAllReview = async (): Promise<IReview[]> => {
    const result = await Review.find(
    //     {
    //     userStatus: "active"
    // }
    )
    return result
}

const getSingleReview = async (id:string): Promise<IReview | null> => {
    const result = await Review.findById(id)
    return result
}

const updateReview = async (id:string, userData: IReview): Promise<IReview | null> => {
    const result = await Review.findByIdAndUpdate(id, userData, {
        new: true, 
        runValidators: true,
    })
    return result
}

const deleteReview = async (id:string): Promise<IReview | null> => {
    const result = await Review.findById(id)
    return result
}


export const reviewServices = {
     createReview,
     getAllReview,
     getSingleReview,
     updateReview,
     deleteReview,
}
