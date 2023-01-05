import 'reflect-metadata'
import 'dotenv/config'
import path from 'path'
import { DataSource, DataSourceOptions } from 'typeorm'

const setDataSourceConfig = (): DataSourceOptions => {

    const nodeEnv = process.env.NODE_ENV

    if(nodeEnv === 'production'){
        return {
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [path.join(__dirname, './entities/**.{js,ts}')],
            migrations: [path.join(__dirname, './migrations/**.{js,ts}')]
        }
    }

    return {
        type: 'postgres',
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT),
        database: process.env.DB,
        synchronize: false,
        logging: true,
        entities: [path.join(__dirname, './entities/**.{js,ts}')],
        migrations: [path.join(__dirname, './migrations/**.{js,ts}')]
    }
}

const dataSource = setDataSourceConfig()
const appDataSource = new DataSource(dataSource)

export default appDataSource