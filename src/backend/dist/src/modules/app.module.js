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
const article_module_1 = require("./article/article.module");
const comment_module_1 = require("./comment/comment.module");
const analytic_module_1 = require("./analytic/analytic.module");
const config_db_1 = require("../../config/config.db");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            comment_module_1.CommentModule,
            article_module_1.ArticleModule,
            analytic_module_1.AnalyticModule,
            sequelize_1.SequelizeModule.forRoot(config_db_1.default),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map