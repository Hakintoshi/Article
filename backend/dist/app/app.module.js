"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const article_module_1 = require("../article/article.module");
const comment_model_1 = require("../comment/models/comment.model");
const article_model_1 = require("../article/models/article.model");
const comment_module_1 = require("../comment/comment.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            comment_module_1.CommentModule,
            article_module_1.ArticleModule,
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => ({
                    dialect: 'postgres',
                    host: 'localhost',
                    port: config.get('DB_PORT'),
                    username: config.get('DB_USER'),
                    password: config.get('DB_PASSWORD'),
                    database: config.get('DB_NAME'),
                    synchronize: true,
                    autoLoadModels: true,
                    models: [article_model_1.Article, comment_model_1.Comment],
                }),
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map