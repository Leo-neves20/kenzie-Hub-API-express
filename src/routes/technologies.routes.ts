import { Router } from "express";
import verifyBodyRequestSchema from "../middleware/varifyBodyRequest.middleware";
import verifyKeysUpdateSchema from "../middleware/verifyKeysUpdate.schema";
import verifyTokenMiddleware from '../middleware/verifyToken.middleware'
import { createTechnologySchema, updateTecnologySchema } from "../schema/technologies.schema";
import { 
    createTechController, 
    deletTechController, 
    listUserTechsController, 
    updateTechController 
} from "../controller/technologies.controller";

const techRoutes = Router()

techRoutes.post('/create',
    verifyTokenMiddleware,
    verifyBodyRequestSchema(createTechnologySchema),
    createTechController
)

techRoutes.get('',
    verifyTokenMiddleware,
    listUserTechsController
)

techRoutes.patch('/:id',
    verifyTokenMiddleware,
    verifyKeysUpdateSchema,
    verifyBodyRequestSchema(updateTecnologySchema),
    updateTechController
)

techRoutes.delete('/:id',
    verifyTokenMiddleware,
    deletTechController
)

export default techRoutes