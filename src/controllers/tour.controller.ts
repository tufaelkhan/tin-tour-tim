import { Request, Response } from "express";
import { tourServices } from "../services/tour.service";

const createTour =  async (req: Request, res: Response) => {
    try{
        const tourData = req.body;
        const result = await tourServices.createTour(tourData)
        res.status(201).json({
            status: 'success',
            message: 'tour created successfully',
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
const getAllTour =  async (req: Request, res: Response) => {
    try{
        const result = await tourServices.getAllTour()
        res.status(200).json({
            status: 'success',
            message: 'tour fetch successfully',
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
const getSingleTour =  async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const result = await tourServices.getSingleTour(id)
        res.status(200).json({
            status: 'success',
            message: 'tour found successfully',
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
const updateTour =  async (req: Request, res: Response) => {
    try{
        const tourData = req.body;
        const id = req.params.id
        const result = await tourServices.updateTour(id, tourData)
        res.status(200).json({
            status: 'success',
            message: 'tour updated successfully',
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
const getNextSchedule =  async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const result = await tourServices.getNextSchedule(id)
        res.status(200).json({
            status: 'success',
            message: 'get nearest tour schedule found',
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
const deleteTour =  async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        await tourServices.deleteTour(id)
        res.status(200).json({
            status: 'success',
            message: 'tour deleted successfully',
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

export const tourController = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule
}