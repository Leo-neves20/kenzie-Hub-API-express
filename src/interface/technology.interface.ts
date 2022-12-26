import { iCreateUserResponse } from "./user.interface"

export interface iTechRequest{
    technology: string,
    status: string
}

export interface iTechRequestUpdate{
    technology?: string,
    status?: string
}

export interface iTechResponse{
    id: number
    technology: string
    status: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    user: iCreateUserResponse
}


