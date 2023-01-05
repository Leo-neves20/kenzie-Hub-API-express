import { instanceToPlain } from 'class-transformer'
import {Request, Response} from 'express'
import { iCreateUserRequest } from '../interface/user.interface'
import { createUserService, getUserInformationsService } from '../service/users.service'

export const createUserController = async (req: Request, res: Response) => {

    console.log(req.body)

    const dataUser: iCreateUserRequest = req.body
    const user = await createUserService(dataUser)

    return res.status(201).json(instanceToPlain(user))

}

export const getUserInformationsController = async (req: Request, res: Response) => {

    const id = req.user.id
    const user = await getUserInformationsService(id)

    return res.status(200).json(instanceToPlain(user))

}
