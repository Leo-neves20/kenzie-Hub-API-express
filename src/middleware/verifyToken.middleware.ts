import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const verifyTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const isToken = req.headers.authorization

    if(!isToken){
        return res.status(401).json({message: 'invalid token'})
    }

    const token = isToken.split(' ')[1]

    jwt.verify(token, process.env.PRIMARY_KEY, (error, decoded: any) => {

        if(error){
            return res.status(401).json(error.message)
        }
        
        req.user = {
            id: decoded.sub
        } 

        return next()

    })

}

export default verifyTokenMiddleware