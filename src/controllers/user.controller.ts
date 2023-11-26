import { Request, Response } from "express";
import { userServices } from "../services/user.service";

const createUser =  async (req: Request, res: Response) => {
    try{
        const userData = req.body;
        const result = await userServices.createUser(userData)
        res.status(201).json({
            status: 'success',
            message: 'user created successfully',
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
const getAllUser =  async (req: Request, res: Response) => {
    try{
        const result = await userServices.getAllUser()
        res.status(200).json({
            status: 'success',
            message: 'user fetch successfully',
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
const getSingleUser =  async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const result = await userServices.getSingleUser(id)
        res.status(200).json({
            status: 'success',
            message: 'user found successfully',
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
const updateUser =  async (req: Request, res: Response) => {
    try{
        const userData = req.body;
        const id = req.params.id
        const result = await userServices.updateUser(id, userData)
        res.status(200).json({
            status: 'success',
            message: 'user updated successfully',
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
const deleteUser =  async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        console.log(id);
        const result = await userServices.deleteUser(id)
        res.status(200).json({
            status: 'success',
            message: 'user deleted successfully',
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

export const userController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
}