import { compare } from "bcrypt"
import appDataSource from "../data-source"
import Users from "../entities/user.entities"
import { AppError } from "../error/appError"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { iLogin } from "../interface/session.interface"

export const createSessionService = async ({email, password}: iLogin): Promise<string> => {

    const usersRepository = appDataSource.getRepository(Users)

    const user = await usersRepository.findOneBy({email: email})
    
    if(!user){
        throw new AppError('Password or Email invalid', 403)
    }
    
    const verifyPassword = await compare(password, user.password)

    if(!verifyPassword){
        throw new AppError('Password or Email invalid', 403)
    }

    const token = jwt.sign(
        {},
        process.env.PRIMARY_KEY,
        {
            subject: user.id,
            expiresIn: '24h'
        }
    )

    return token

}