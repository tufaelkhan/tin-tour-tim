import { Request, Response } from "express";
import { reviewServices } from "../services/review.service";

const createReview =  async (req: Request, res: Response) => {
    try{
        const reviewData = req.body;
        const result = await reviewServices.createReview(reviewData)
        res.status(201).json({
            status: 'success',
            message: 'Review created successfully',
            data: result
        })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err: any){
        console.log(err);
        res.status(500).json({
            status: 'fail',
            message: err.message || 'something is wrong'
        })
    }
}
const getAllReview =  async (req: Request, res: Response) => {
    try{
        const result = await reviewServices.getAllReview()
        res.status(200).json({
            status: 'success',
            message: 'Review fetch successfully',
            data: result
        })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err: any){
        console.log(err);
        res.status(500).json({
            status: 'fail',
            message: err.message || 'something is wrong'
        })
    }
}
const getSingleReview =  async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const result = await reviewServices.getSingleReview(id)
        res.status(200).json({
            status: 'success',
            message: 'Review found successfully',
            data: result
        })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err: any){
        console.log(err);
        res.status(500).json({
            status: 'fail',
            message: err.message || 'something is wrong'
        })
    }
}
const updateReview =  async (req: Request, res: Response) => {
    try{
        const ReviewData = req.body;
        const id = req.params.id
        const result = await reviewServices.updateReview(id, ReviewData)
        res.status(200).json({
            status: 'success',
            message: 'Review updated successfully',
            data: result
        })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err: any){
        console.log(err);
        res.status(500).json({
            status: 'fail',
            message: err.message || 'something is wrong'
        })
    }
}
const deleteReview =  async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        await reviewServices.deleteReview(id)
        res.status(200).json({
            status: 'success',
            message: 'Review deleted successfully',
        })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err: any){
        console.log(err);
        res.status(500).json({
            status: 'fail',
            message: err.message || 'something is wrong'
        })
    }
}

export const reviewController = {
    createReview,
    getAllReview,
    getSingleReview,
    updateReview,
    deleteReview,
}