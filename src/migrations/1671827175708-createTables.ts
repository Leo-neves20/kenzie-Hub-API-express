import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1671827175708 implements MigrationInterface {
    name = 'createTables1671827175708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "technologies" ("id" SERIAL NOT NULL, "technology" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'Iniciante', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" uuid, CONSTRAINT "PK_9a97465b79568f00becacdd4e4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "confirm_password" character varying NOT NULL, "module" character varying NOT NULL DEFAULT 'módulo 1 - (Lógica de programação)', "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "technologies" ADD CONSTRAINT "FK_7c002c9ed24603cb01cc8d07100" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "technologies" DROP CONSTRAINT "FK_7c002c9ed24603cb01cc8d07100"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "technologies"`);
    }

}
