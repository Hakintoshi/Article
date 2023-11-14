import {SequelizeModuleOptions} from "@nestjs/sequelize";
const env = process.env
export default {
    dialect: env.DIALECT,
    host: env.POSTGRES_HOST,
    port: +env.POSTGRES_PORT,
    username: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DB,
    synchronize: true,
    autoLoadModels: true
} as SequelizeModuleOptions;