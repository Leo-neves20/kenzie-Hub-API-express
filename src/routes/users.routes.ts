import {Router} from 'express'
import { createUserController, getUserInformationsController } from '../controller/users.controller'
import verifyBodyRequestSchema from '../middleware/varifyBodyRequest.middleware'
import verifyTokenMiddleware from '../middleware/verifyToken.middleware'
import { createUserSchema } from '../schema/user.schema'

const userRoutes = Router()

userRoutes.post('/register', 
    verifyBodyRequestSchema(createUserSchema), 
    createUserController
)

userRoutes.get('/data',
    verifyTokenMiddleware, 
    getUserInformationsController
)

export default userRoutes