import { Console } from "console";
import appDataSource from "../data-source";
import Technologies from "../entities/technologies.entities";
import Users from "../entities/user.entities";
import { AppError } from "../error/appError";
import { iTechResponse, iTechRequest, iTechRequestUpdate } from "../interface/technology.interface";

export const createTechService = async (dataTech: iTechRequest, idUser: string): Promise<iTechResponse> => {

  const techsRepository = appDataSource.getRepository(Technologies);
  const usersRepository = appDataSource.getRepository(Users)
  const user            = await usersRepository.findOneBy({id: idUser})

  const techsUser = await usersRepository.findOne(
      {
        where:{
          id: idUser
        },
        relations:{
          techs: true
        }
      }
  )

  const techExists = techsUser.techs.find(tech =>  dataTech.technology === tech.technology) 

  if(techExists){
    throw new AppError('Technology already exists', 409)
  }
    
  const dataCreate = techsRepository.create({...dataTech, user})
  const newTech    = await techsRepository.save(dataCreate)
    
  return newTech
    
}
  
export const listUserTechsService = async (idUser: string): Promise<iTechResponse[]> => {

  const usersRepository = appDataSource.getRepository(Users)

  const techsUser = await usersRepository.findOne(
    {
      where:{
        id: idUser
      },
      relations:{
        techs: true
      }
    }
  )
    
  return techsUser.techs

}

export const updateTechService = async (dataUpdate: iTechRequestUpdate, idTech: number): Promise<iTechResponse> => {

  const usersRepository = appDataSource.getRepository(Technologies)

  const findTech = await usersRepository.findOneBy({id: idTech})

  if(!findTech){
    throw new AppError('technology not found', 404)

  }

  await usersRepository.update(idTech, {...findTech, ...dataUpdate})

  return findTech
  
}

export const deletTechService = async (idTech: number) => {

  const usersRepository = appDataSource.getRepository(Technologies)

  const findTech = await usersRepository.findOneBy({id: idTech})

  if(!findTech){
    throw new AppError('technology not found', 404)
  }

  await usersRepository.softRemove(findTech)

};
