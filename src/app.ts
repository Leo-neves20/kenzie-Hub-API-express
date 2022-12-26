import 'express-async-errors'
import express from 'express'
import { handleError } from './error/appError'
import userRoutes from './routes/users.routes'
import createSessionRouter from './routes/session.routes'
import techRoutes from './routes/technologies.routes'

const app = express()
app.use(express.json())

app.use('/login', createSessionRouter)
app.use('/users', userRoutes) 
app.use('/techs', techRoutes)

app.use(handleError)

export default app