import express, { Application, Request, Response } from 'express'
import { userRouter } from './routes/user.route'
import cors from 'cors'
const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRouter )


app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome to our travel agency'
  })
})

export default app;

