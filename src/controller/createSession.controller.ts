import {Request, Response} from 'express'
import { iLogin } from '../interface/session.interface'
import { createSessionService } from '../service/session.service'

export const createSessionController = async (req: Request, res: Response) => {

    const dataLogin: iLogin = req.body
    const token = await createSessionService(dataLogin)

    return res.status(200).json({token: token})

}
