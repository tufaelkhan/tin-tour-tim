import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'

const createTour = async(userData: ITour): Promise<ITour> => {
  const result = await Tour.create(userData)
  return result
}

const getAllTour = async (): Promise<ITour[]> => {
    const result = await Tour.find(
    //     {
    //     userStatus: "active"
    // }
    )
    return result
}

const getSingleTour = async (id:string): Promise<ITour | null> => {
    const result = await Tour.findById(id).populate('reviews')
    return result
}

const updateTour = async (id:string, userData: ITour): Promise<ITour | null> => {
    const result = await Tour.findByIdAndUpdate(id, userData, {
        new: true, 
        runValidators: true,
    })
    return result
}

const deleteTour = async (id:string): Promise<ITour | null> => {
    const result = await Tour.findById(id)
    return result
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getNextSchedule = async (id:string): Promise<any> => {
    const tour = await Tour.findById(id)
    const nextSchedule = tour?.getNextNearestStartAndEndDate()

    return {
        tour,
        nextSchedule
    }
}



export const tourServices = {
     createTour,
     getAllTour,
     getSingleTour,
     updateTour,
     deleteTour,
     getNextSchedule
}
