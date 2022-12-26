import Users from './user.entities'
import {
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    ManyToOne
} from 'typeorm'


@Entity('technologies')
class Technologies{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    technology: string

    @Column({default: 'Iniciante'})
    status: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn({nullable: true})
    deletedAt: Date

    @ManyToOne(() => Users, user => user.techs)
    user: Users

}

export default Technologies