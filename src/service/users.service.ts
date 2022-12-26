import {Request, Response} from 'express'
import appDataSource from '../data-source'
import Users from '../entities/user.entities'
import { AppError } from '../error/appError'
import { iCreateUserRequest, iCreateUserResponse } from '../interface/user.interface'

export const createUserService = async (dataRegister: iCreateUserRequest): Promise<iCreateUserResponse> => {

    console.log(dataRegister)

    const usersRepository = appDataSource.getRepository(Users)

    const emailExists = await usersRepository.findOneBy({email: dataRegister.email})

    if(emailExists){
        throw new AppError('Email alredy registred')
    }

    const dataUser = usersRepository.create(dataRegister)
    const newUser  = await usersRepository.save(dataUser)

    console.log(newUser)

    return newUser

}

export const getUserInformationsService = async (idUser: string): Promise<iCreateUserResponse> => {

    const usersRepository = appDataSource.getRepository(Users)

    const whoIsLogged = await usersRepository.findOneBy({id: idUser})

    return whoIsLogged

}

export const getTechnologiesUserService = async () => {}