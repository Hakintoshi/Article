"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AnalyticService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const comment_model_1 = require("../../models/comment.model");
const httpStatus_1 = require("../../const/httpStatus");
const sequelize_2 = require("sequelize");
const article_model_1 = require("../../models/article.model");
const const_1 = require("./const");
let AnalyticService = AnalyticService_1 = class AnalyticService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
        this.logger = new common_1.Logger(AnalyticService_1.name);
    }
    async getAnalytic(dateFrom, dateTo) {
        try {
            const comments = await this.commentRepository.findAll({
                where: {
                    createdAt: {
                        [sequelize_2.Op.gte]: new Date(+dateFrom),
                        [sequelize_2.Op.lte]: new Date(+dateTo),
                    },
                },
                include: article_model_1.article,
            });
            return {
                message: const_1.message.SUCCESS_GET_ANALYTIC,
                status: httpStatus_1.HttpStatus.OK,
                data: comments,
            };
        }
        catch (e) {
            this.logger.error(const_1.message.ERROR_GET_ANALYTIC);
            throw new common_1.HttpException(`${const_1.message.ERROR_GET_ANALYTIC} ${e}`, httpStatus_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AnalyticService = AnalyticService;
exports.AnalyticService = AnalyticService = AnalyticService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(comment_model_1.article_comment)),
    __metadata("design:paramtypes", [Object])
], AnalyticService);
//# sourceMappingURL=analytic.service.js.map