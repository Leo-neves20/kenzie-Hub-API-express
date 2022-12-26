import {Request, Response} from 'express'
import { iTechRequest, iTechRequestUpdate } from '../interface/technology.interface'
import { createTechService, deletTechService, listUserTechsService, updateTechService } from '../service/technologies.service'

export const createTechController = async (req: Request, res: Response) => {

    const dataTech: iTechRequest = req.body
    const idUser: string = req.user.id
    const tech = await createTechService(dataTech, idUser)

    return res.status(201).json(tech)

}
export const listUserTechsController = async (req: Request, res: Response) => {

    const id = req.user.id
    const techList = await listUserTechsService(id)

    return res.status(200).json(techList)

}
export const updateTechController = async (req: Request, res: Response) => {

    const dataUpdate: iTechRequestUpdate = req.body
    const techId: number = parseInt(req.params.id)

    const techUpdated = await updateTechService(dataUpdate, techId)

    return res.status(200).json(techUpdated)

}

export const deletTechController = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id) 

    const returned = await deletTechService(id)

    return res.status(204).json()

}