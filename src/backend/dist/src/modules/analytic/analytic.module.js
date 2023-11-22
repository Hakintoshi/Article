"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticModule = void 0;
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const analytic_controller_1 = require("./analytic.controller");
const article_model_1 = require("../../models/article.model");
const analytic_service_1 = require("./analytic.service");
let AnalyticModule = class AnalyticModule {
};
exports.AnalyticModule = AnalyticModule;
exports.AnalyticModule = AnalyticModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([article_model_1.Article])],
        providers: [analytic_service_1.AnalyticService],
        controllers: [analytic_controller_1.AnalyticController],
    })
], AnalyticModule);
//# sourceMappingURL=analytic.module.js.map