import {Response, Request, NextFunction} from 'express'
import { AppError } from '../error/appError'

const verifyKeysUpdateSchema = async (req: Request, res: Response, next: NextFunction) => {

    const dataUpdate = req.body

    const isId = "id" in dataUpdate
    const isCreatedAt = "createdAt" in dataUpdate
    const isUpdatedAt = "updatedAt" in dataUpdate
    const isDeletedAt = "deletedAt" in dataUpdate

    if(isId || isCreatedAt || isUpdatedAt || isDeletedAt){

        throw new AppError('only Techlogy and status is able to update')

    }

    return next()

}

export default verifyKeysUpdateSchema