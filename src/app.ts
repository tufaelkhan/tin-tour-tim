import express, { Application, Request, Response } from 'express'
const app: Application = express()


app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome to our travel agency'
  })
})

export default app;

