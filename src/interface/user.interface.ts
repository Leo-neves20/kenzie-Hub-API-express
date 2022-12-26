
export interface iCreateUserRequest{
    name: string,
    email: string,
    password: string,
    confirm_password: string,
    module: string
}

export interface iCreateUserResponse{
    id: string,
    name: string,
    email: string,
    password: string,
    confirm_password: string,
    module: string,
    isActive: boolean, 
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
}
