"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = process.env;
exports.default = {
    dialect: env.DIALECT,
    host: env.POSTGRES_HOST,
    port: +env.POSTGRES_PORT,
    username: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DB,
    synchronize: true,
    autoLoadModels: true
};
//# sourceMappingURL=config.db.js.map