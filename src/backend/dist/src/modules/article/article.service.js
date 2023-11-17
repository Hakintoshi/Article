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
var ArticleService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const article_model_1 = require("../../models/article.model");
const index_1 = require("./const/index");
const httpStatus_1 = require("../../const/httpStatus");
let ArticleService = ArticleService_1 = class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
        this.logger = new common_1.Logger(ArticleService_1.name);
    }
    async createArticle(dto, articleId) {
        try {
            if (articleId) {
                try {
                    await this.articleRepository.update({ title: dto.title, body: dto.body }, { where: { article_id: articleId } });
                    return {
                        message: index_1.message.SUCCESS_UPDATE_ARTICLE,
                        status: httpStatus_1.HttpStatus.OK,
                        data: null,
                    };
                }
                catch (e) {
                    this.logger.error(index_1.message.ERROR_UPDATE_ARTICLE);
                    throw new common_1.HttpException(`${index_1.message.ERROR_UPDATE_ARTICLE} ${e}`, httpStatus_1.HttpStatus.BAD_REQUEST);
                }
            }
            await this.articleRepository.create({
                title: dto.title,
                body: dto.body,
            });
            return {
                message: index_1.message.SUCCESS_CREATE_ARTICLE,
                status: httpStatus_1.HttpStatus.OK,
                data: null,
            };
        }
        catch (e) {
            this.logger.error(`${index_1.message.ERROR_CREATE_ARTICLE} ${e}`);
            throw new common_1.HttpException(`${index_1.message.ERROR_CREATE_ARTICLE} ${e}`, httpStatus_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getAllArticles() {
        try {
            const articles = await this.articleRepository.findAll();
            return {
                message: index_1.message.SUCCESS_GET_ARTICLES,
                status: httpStatus_1.HttpStatus.OK,
                data: articles,
            };
        }
        catch (e) {
            this.logger.error(index_1.message.ERROR_GET_ARTICLES);
            throw new common_1.HttpException(`${index_1.message.ERROR_GET_ARTICLES} ${e}`, httpStatus_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getArticle(id) {
        try {
            const article = await this.articleRepository.findOne({
                where: { article_id: id },
            });
            if (!article) {
                return {
                    message: index_1.message.ARTICLE_NOT_FOUND,
                    status: httpStatus_1.HttpStatus.NOT_FOUND,
                    data: null,
                };
            }
            return {
                message: index_1.message.SUCCESS_GET_ARTICLE,
                status: httpStatus_1.HttpStatus.OK,
                data: article,
            };
        }
        catch (e) {
            this.logger.error(index_1.message.ERROR_GET_ARTICLE);
            throw new common_1.HttpException(`${index_1.message.ERROR_GET_ARTICLE} ${e}`, httpStatus_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteArticle(id) {
        try {
            await this.articleRepository.destroy({ where: { article_id: id } });
            return {
                message: index_1.message.SUCCESS_DELETE_ARTICLE,
                status: httpStatus_1.HttpStatus.OK,
                data: null,
            };
        }
        catch (e) {
            this.logger.error(index_1.message.ERROR_DELETE_ARTICLE);
            throw new common_1.HttpException(`${index_1.message.ERROR_DELETE_ARTICLE} ${e}`, httpStatus_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ArticleService = ArticleService;
exports.ArticleService = ArticleService = ArticleService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(article_model_1.article)),
    __metadata("design:paramtypes", [Object])
], ArticleService);
//# sourceMappingURL=article.service.js.map