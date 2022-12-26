import { Exclude } from "class-transformer";
import { hashSync } from "bcrypt";
import Technologies from "./technologies.entities";
import {
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Entity,
  BeforeInsert,
  BeforeUpdate,
  DeleteDateColumn,
} from "typeorm";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  @Exclude()
  confirm_password: string;

  @Column({ default: "módulo 1 - (Lógica de programação)" })
  module: string;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Technologies, (Technologies) => Technologies.user)
  techs: Technologies[];

  @BeforeUpdate()
  @BeforeInsert()
  verifyHash() {

    this.confirm_password = hashSync(this.confirm_password, 10);
    this.password = hashSync(this.password, 10);

  }
}

export default Users;
