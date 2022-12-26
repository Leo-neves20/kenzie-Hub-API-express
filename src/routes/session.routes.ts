import { Router } from "express";
import { createSessionController } from "../controller/createSession.controller";
import verifyBodyRequestSchema from "../middleware/varifyBodyRequest.middleware";
import { createSessionSchema } from "../schema/user.schema";

const createSessionRouter = Router()

createSessionRouter.post('',
    verifyBodyRequestSchema(createSessionSchema), 
    createSessionController
)

export default createSessionRouter